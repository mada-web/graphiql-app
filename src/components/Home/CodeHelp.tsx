import { FormattedMessage } from 'react-intl';

export const pokemonsCode = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
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
            <pre className="hidden md:inline-block">{pokemonsCode}</pre>
            <code className="inline-block md:hidden">{pokemonsCode}</code>
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
