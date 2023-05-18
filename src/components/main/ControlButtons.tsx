import { FC, SyntheticEvent } from 'react';

import useAppContext from '../../hooks/useAppContext';

import BtnPlay from '../../assets/svg/btn_play.svg';
import BtnQuery from '../../assets/svg/btn_query_params.svg';
import BtnSchema from '../../assets/svg/btn_schema.svg';
import { getQuery, getSchema } from '../../utils/api';
import { IQueries } from '../../providers/AppProviders';

const ControlButtons: FC = (): JSX.Element => {
  const {
    setIsDataLoading,
    setIsShowSchema,
    setIsQueryParams,
    setSchema,
    queryBody,
    queryParams,
    setResponseApi,
    schema,
  } = useAppContext();

  const executeQuery = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsDataLoading(true);

    const data = await getQuery({ queryBody, queryParams });
    setResponseApi(() => JSON.stringify(data, null, '\t'));

    setIsDataLoading(false);
  };

  const showSchema = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!schema.length) {
      const { data } = await getSchema();
      const queries: { fields: IQueries[] } = data.__schema.types.find(
        (el: { name: string }) => el.name === 'Query'
      );

      setSchema(queries.fields);
    }
    setIsShowSchema((prev) => !prev);
  };

  const showQueryParams = (e: SyntheticEvent) => {
    e.preventDefault();

    setIsQueryParams((prev) => !prev);
  };

  return (
    <aside className="col-start-2 row-span-2 row-start-1 ml-2 flex h-[100%] flex-col items-start gap-2 border-r-0 border-gray pr-2 sm:h-[calc(100%-2rem)] sm:items-center sm:border-r-[1px]">
      <button
        title="Execute query"
        className="mr-2 h-[30px] w-[30px] transition-all hover:brightness-150"
        onClick={(e) => executeQuery(e)}
      >
        <BtnPlay />
      </button>
      <button
        title="Query params"
        className="mb-3 mr-2 h-[30px] w-[30px] transition-all hover:brightness-150"
        onClick={(e) => showQueryParams(e)}
      >
        <BtnQuery />
      </button>
      <button
        title="Show schema"
        className="mr-2 h-[30px] w-[30px] transition-all hover:brightness-150"
        onClick={(e) => showSchema(e)}
      >
        <BtnSchema />
      </button>
    </aside>
  );
};

export default ControlButtons;
