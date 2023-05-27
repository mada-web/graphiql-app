import { FormattedMessage } from 'react-intl';

const queries = {
  code_1: `query pokemons($limit: Int, $offset: Int) {`,
  code_2: `pokemons(limit: $limit, offset: $offset) {`,
  code_3: `    count
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
  code_4: `{
    "limit": 2, "offset": 1
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
            <p>{queries.code_1}</p>
            <p>{queries.code_2}</p>
            <pre>{queries.code_3}</pre>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <p>
            <FormattedMessage id="INTRO_HELP4" />
          </p>
          <div className="rounded-[10px] bg-query p-6 text-dark-blue ">
            <pre>{queries.code_4}</pre>
          </div>
        </div>
      </div>
    </>
  );
};
export default CodeHelp;
