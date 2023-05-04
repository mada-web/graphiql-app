import { FC, useState } from 'react';
import ControlBtns from '../components/main/ControlBtns';
import EditorBlock from '../components/main/EditorBlock';
import QueryBlock from '../components/main/QueryBlock';
import ResponseBlock from '../components/main/ResponseBlock';

const Main: FC = (): JSX.Element => {
  const [isQueryParams, setIsQueryParams] = useState(false);
  const openQueryEditor = () => {
    setIsQueryParams((prev) => !prev);
  };

  return (
    <main className="bg-dark-blue w-screen h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-[100px] grid-rows-1 h-[100%]">
        <div className="grid grid-cols-[90%_10%] grid-rows-[60%_40%]">
          <EditorBlock />
          <ControlBtns />
          <div className="self-end row-start-2 col-span-2 col-start-1 flex flex-col w-full">
            <button
              onClick={openQueryEditor}
              className="bg-green text-center py-2 w-[80%] self-center lg:w-1/3 rounded-t-lg lg:ml-10 lg:self-start transition-all"
            >
              query params
            </button>
            {isQueryParams && <QueryBlock />}
          </div>
        </div>
        <ResponseBlock />
      </div>
    </main>
  );
};

export default Main;
