import notifyUser from './toast';

interface IQueryReq {
  queryBody: string;
  queryParams: string;
}

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
