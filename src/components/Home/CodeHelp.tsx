import { FormattedMessage } from 'react-intl';

export const pokemonsCode1 = `query pokemons($limit: Int, $offset: Int) {`;
export const pokemonsCode2 = `pokemons(limit: $limit, offset: $offset) {`;
export const pokemonsCode3 = `    count
    next
    previous
    status
    message
    results {
      url
      name
      image
    }
  }
}`;

export const qweryCode = `{
  "limit": 2,
  "offset": 1
}`;

const CodeHelp = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 lg:flex-row">
          <p>
            <FormattedMessage id="INTRO_HELP3" />
          </p>
          <div className="rounded-[10px] bg-query p-6 text-dark-blue ">
            <p>{pokemonsCode1}</p>
            <p>{pokemonsCode2}</p>
            <pre>{pokemonsCode3}</pre>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <p>
            <FormattedMessage id="INTRO_HELP4" />
          </p>
          <div className="rounded-[10px] bg-query p-6 text-dark-blue ">
            <pre>{qweryCode}</pre>
          </div>
        </div>
      </div>
    </>
  );
};
export default CodeHelp;
