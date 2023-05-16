import { FC } from 'react';

import useAppContext from '../../hooks/useAppContext';
import ApiQuery from '../ApiPokemon/ApiQuery';
import getSchema from '../ApiPokemon/GetSchema';

import BtnPlay from '../../assets/svg/btn_play.svg';
import BtnQuery from '../../assets/svg/btn_query_params.svg';
import BtnSchema from '../../assets/svg/btn_schema.svg';
import { getQuery, getSchema } from '../../utils/api';
import { IQueries } from '../../providers/AppProviders';
import { SchemaData, Type } from '../../types/types';

const ControlButtons: FC = (): JSX.Element => {
  const {
    setIsShowSchema,
    setIsQueryParams,
    setResponseApi,
    queryBody,
    queryParams,
    setSchema,
    setSchemaData,
  } = useAppContext();

  const executeQuery = async () => {
    const data = await getQuery({ queryBody, queryParams });
    setResponseApi(() => JSON.stringify(data, null, '\t'));
  };

  const showSchema = async () => {
    setIsShowSchema((prev) => !prev);
    const { data } = await getSchema();
    console.log(' data', data);
    const queries = data.__schema.types.find((el: { name: string }) => el.name === 'Query') as Type;
    setSchemaData(data.__schema);
    console.log('queries', queries);
    //setSchemaData(JSON.stringify(data, null, '\t'));
    //setSchemaData(JSON.stringify(queries.fields, null, '\t'));
    setSchema(() => (queries.fields ? queries.fields : [{ name: 'no data' }]));
  };

  const showQueryParams = () => {
    setIsQueryParams((prev) => !prev);
  };

  return (
    <aside className="col-start-2 row-span-2 row-start-1 ml-2 flex h-[100%] flex-col items-start gap-2 border-r-0 border-gray pr-2 sm:h-[calc(100%-2rem)] sm:items-center sm:border-r-[1px]">
      <button
        title="Execute query"
        className="mr-2 h-[30px] w-[30px] transition-all hover:brightness-150"
        onClick={executeQuery}
      >
        <BtnPlay />
      </button>
      <button
        title="Query params"
        className="mb-3 mr-2 h-[30px] w-[30px] transition-all hover:brightness-150"
        onClick={showQueryParams}
      >
        <BtnQuery />
      </button>
      <button
        title="Show schema"
        className="mr-2 h-[30px] w-[30px] transition-all hover:brightness-150"
        onClick={showSchema}
      >
        <BtnSchema />
      </button>
    </aside>
  );
};

export default ControlButtons;
