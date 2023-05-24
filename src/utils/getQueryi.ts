import notifyUser from './toast';

interface IQueryReq {
  queryBody: string;
  queryParams: string;
  headersParams: string;
}

function isJSONObject(jsonStr) {
  try {
    const obj = JSON.parse(jsonStr);
    return typeof obj === 'object' ? obj : null;
  } catch (error) {
    return null;
  }
}

export const getQuery = async ({ queryBody, queryParams, headersParams }: IQueryReq) => {
  try {
    const variables = queryParams ? JSON.parse(queryParams) : null;

    const additionalHeaders = isJSONObject(headersParams);

    const headers = {
      'Content-Type': 'application/json',
      ...(additionalHeaders && additionalHeaders),
    };

    const body = JSON.stringify({
      query: queryBody,
      variables,
    });

    const response = await fetch('https://graphql-pokeapi.graphcdn.app/', {
      method: 'POST',
      credentials: 'omit',
      headers,
      body,
    });

    return await response.json();
  } catch (error) {
    notifyUser(error.message);
  }
};
