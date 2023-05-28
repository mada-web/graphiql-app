import { FormattedMessage } from 'react-intl';

const queries = {
  code1: `query pokemons($limit: Int, $offset: Int) {`,
  code2: `pokemons(limit: $limit, offset: $offset) {`,
  code3: `    count
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
}`,
  code4: `{
  "limit": 2,
  "offset": 1
}`,
};

const CodeHelp = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 lg:flex-row">
          <p>
            <FormattedMessage id="INTRO_HELP3" />
          </p>
          <div className="rounded-[10px] bg-query p-6 text-dark-blue ">
            <p>{queries.code1}</p>
            <p>{queries.code2}</p>
            <pre>{queries.code3}</pre>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <p>
            <FormattedMessage id="INTRO_HELP4" />
          </p>
          <div className="rounded-[10px] bg-query p-6 text-dark-blue ">
            <pre>{queries.code4}</pre>
          </div>
        </div>
      </div>
    </>
  );
};
export default CodeHelp;
