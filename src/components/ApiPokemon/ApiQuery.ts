interface IApi {
  queryBody: string;
  queryParams: string;
}

const ApiQuery = async ({ queryBody, queryParams }: IApi) => {
  const variables = queryParams ? JSON.parse(queryParams) : {};
  console.log('variables', variables);
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
  const data = await response.json();
  return data;
};

export default ApiQuery;
