import { FC } from 'react';

import { getQuery } from '../../utils/getQueryi';
import useAppContext from '../../hooks/useAppContext';

import BtnPlay from '../../assets/svg/btn_play.svg';
import BtnQuery from '../../assets/svg/btn_query_params.svg';
import BtnHeaders from '../../assets/svg/btn_headers_params.svg';
import BtnSchema from '../../assets/svg/btn_schema.svg';

const ControlButtons: FC = (): JSX.Element => {
  const {
    setIsShowSchema,
    setIsQueryParams,
    setResponseApi,
    queryBody,
    queryParams,
    setIsDataLoading,
    schema,
    setParams,
    params,
    isSaveHeadersParams,
    isSaveQueryParams,
    setQueryParams,
    setHeadersParams,
  } = useAppContext();

  const executeQuery = async () => {
    setIsDataLoading(true);

    const data = await getQuery({ queryBody, queryParams });
    setResponseApi(() => JSON.stringify(data, null, '\t'));

    setIsDataLoading(false);
    if (!isSaveHeadersParams) setHeadersParams('');
    if (!isSaveQueryParams) setQueryParams('');
  };

  const showSchema = async () => {
    setIsShowSchema((prev) => !prev);
  };

  const showQueryParams = () => {
    setIsQueryParams((prev) => (params === 'query params' ? !prev : true));
    setParams('query params');
  };

  const showHeadersParams = () => {
    setIsQueryParams((prev) => (params === 'headers' ? !prev : true));
    setParams('headers');
  };

  return (
    <aside className="col-start-2 row-span-2 row-start-1 ml-2 flex h-[100%] flex-col items-center gap-2 border-r-0 border-gray pr-2 sm:h-[calc(100%-2rem)] sm:items-center sm:border-r-[1px]">
      <button
        title="Execute query"
        className="mr-2 h-[30px] w-[30px] transition-all hover:brightness-150"
        onClick={executeQuery}
      >
        <BtnPlay />
      </button>
      <button
        title="Query params"
        className="mr-2 h-[30px] w-[30px] transition-all hover:brightness-150"
        onClick={showQueryParams}
      >
        <BtnQuery />
      </button>
      <button
        title="Headers"
        className="mr-2 h-[30px] w-[30px] transition-all hover:brightness-150"
        onClick={showHeadersParams}
      >
        <BtnHeaders />
      </button>
      <button
        title="Show schema"
        disabled={schema.length === 1}
        className="mr-2 mt-3 h-[30px] w-[30px] transition-all hover:brightness-150"
        onClick={showSchema}
      >
        <BtnSchema />
      </button>
    </aside>
  );
};

export default ControlButtons;
