import { FC, useState } from 'react';
import Play from '../assets/svg/btn_play.svg';

const Main: FC = (): JSX.Element => {
  const [isQueryParams, setIsQueryParams] = useState(false);
  const openTextArea = () => {
    setIsQueryParams((prev) => !prev);
  };

  return (
    <main className="bg-dark-blue w-screen h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-[100px] grid-rows-1 h-[100%]">
        <div className="grid grid-cols-[90%_10%] grid-rows-[60%_40%]">
          <div className="col-start-1 row-start-1 pl-10">
            {/* place for code input */}
            <textarea />
          </div>
          <aside className="border-r-0 sm:border-r-[1px] border-gray row-span-2 h-[100%] col-start-2 row-start-1">
            <button title="Execute query" className="w-[30px] h-[30px] mr-2">
              <Play />
            </button>
            {/* place for control buttons */}
          </aside>
          <div className="self-end row-start-2 col-span-2 col-start-1 flex flex-col w-full">
            <button
              onClick={openTextArea}
              className="bg-green text-center py-2 w-[80%] self-center lg:w-1/3 rounded-t-lg lg:ml-10 lg:self-start transition-all"
            >
              query params
            </button>
            {isQueryParams && (
              <div className="h-[200px] pt-5 w-full bg-gray pl-7 transition-all border-b-2 border-dark-blue">
                some query
              </div>
            )}
            {/* place for query params */}
          </div>
        </div>
        <div className="w-1/2">{/* place for response */}</div>
      </div>
    </main>
  );
};

export default Main;
