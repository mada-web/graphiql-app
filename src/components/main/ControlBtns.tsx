import { FC } from 'react';

import useAppContext from '../../hooks/useAppContext';

import BtnPlay from '../../assets/svg/btn_play.svg';
import BtnQuery from '../../assets/svg/btn_query_params.svg';
import BtnSchema from '../../assets/svg/btn_schema.svg';

export interface IControlBtns {
  changeList: (str: string) => void;
}
const ControlBtns: FC = (): JSX.Element => {
  const { setIsShowSchema, setIsQueryParams, setIsShowResult } = useAppContext();

  const executeQuery = () => {
    setIsShowResult(true);
  };

  const showSchema = () => {
    setIsShowSchema((prev) => !prev);
  };

  const showQueryParams = () => {
    setIsQueryParams((prev) => !prev);
  };

  return (
    <aside className="col-start-2 row-span-2 row-start-1 ml-2 flex h-[100%] flex-col items-start gap-2 border-r-0 border-gray pr-2 sm:items-center sm:border-r-[1px]">
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

export default ControlBtns;
