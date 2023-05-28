import notifyUser from './toast';

const getSchema = async () => {
  try {
    const response = await fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query IntrospectionQuery {
          __schema {
            types {
              ...FullType
            }
          }
        }
        
        fragment FullType on __Type {
          name
          description
          fields(includeDeprecated: false) {
            name
            description
            args {
              ...InputValue
            }
            type {
              ...TypeRef
            }
          }
        }
        fragment InputValue on __InputValue {
          name
          description
          type { ...TypeRef }
        }
        fragment TypeRef on __Type {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                      ofType {
                        kind
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
      }),
    });

    return await response.json();
  } catch (error) {
    notifyUser(error.message);
  }
};

export default getSchema;
