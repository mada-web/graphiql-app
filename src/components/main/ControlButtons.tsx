import { FC } from 'react';

import BtnPlay from '../../assets/svg/btn_play.svg';
import BtnQuery from '../../assets/svg/btn_query_params.svg';
import BtnSchema from '../../assets/svg/btn_schema.svg';

interface Clicks {
  onClick1: React.ReactEventHandler<HTMLButtonElement>;
  onClick2: React.ReactEventHandler<HTMLButtonElement>;
  onClick3: React.ReactEventHandler<HTMLButtonElement>;
}

const ControlButtons: FC<Clicks> = (props): JSX.Element => {
  const { onClick1, onClick2, onClick3 } = props;
  return (
    <aside className="col-start-2 row-span-2 row-start-1 ml-2 flex h-[100%] flex-col items-start gap-2 border-r-0 border-gray pr-2 sm:h-[calc(100%-2rem)] sm:items-center sm:border-r-[1px]">
      <button
        title="Execute query"
        className="mr-2 h-[30px] w-[30px] transition-all hover:brightness-150"
        onClick={onClick1}
      >
        <BtnPlay />
      </button>
      <button
        title="Query params"
        className="mb-3 mr-2 h-[30px] w-[30px] transition-all hover:brightness-150"
        onClick={onClick2}
      >
        <BtnQuery />
      </button>
      <button
        title="Show schema"
        className="mr-2 h-[30px] w-[30px] transition-all hover:brightness-150"
        onClick={onClick3}
      >
        <BtnSchema />
      </button>
    </aside>
  );
};

export default ControlButtons;
