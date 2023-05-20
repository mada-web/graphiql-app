import notifyUser from './toast';

//TODO we should describe types later

interface IQueryReq {
  queryBody: string;
  queryParams: string;
}

// export const getSchema = async () => {
//   try {
//     const response = await fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         query: `
//       query IntrospectionQuery {
//         __schema {
//           types {
//             name
//             kind
//             description
//             fields {
//               name
//               description
//             }
//           }
//         }
//       }
//     `,
//       }),
//     });

//     return await response.json();
//   } catch (error) {
//     notifyUser(error.message);
//   }
// };

export const getQuery = async ({ queryBody, queryParams }: IQueryReq) => {
  const variables = queryParams ? JSON.parse(queryParams) : {};
  try {
    const response = await fetch('https://graphql-pokeapi.graphcdn.app/', {
      method: 'POST',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: queryBody,
        variables,
      }),
    });

    return await response.json();
  } catch (error) {
    notifyUser(error.message);
  }
};
