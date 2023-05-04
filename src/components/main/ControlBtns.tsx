import { FC } from 'react';
import Play from '../../assets/svg/btn_play.svg';

const ControlBtns: FC = (): JSX.Element => {
  return (
    <aside className="border-r-0 sm:border-r-[1px] border-gray row-span-2 h-[100%] col-start-2 row-start-1">
      <button title="Execute query" className="w-[30px] h-[30px] mr-2">
        <Play />
      </button>
      {/* place for control buttons */}
    </aside>
  );
};
export default ControlBtns;
