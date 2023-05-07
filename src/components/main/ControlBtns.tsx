import { FC } from 'react';

import Play from '../../assets/svg/btn_play.svg';

export interface IControlBtns {
  changeList: (str: string) => void;
}
const ControlBtns: FC = (): JSX.Element => {
  return (
    <aside className="col-start-2 row-span-2 row-start-1 h-[100%] border-r-0 border-gray sm:border-r-[1px]">
      <button title="Execute query" className="mr-2 h-[30px] w-[30px]">
        <Play />
      </button>
      {/* place for control buttons */}
    </aside>
  );
};
export default ControlBtns;
