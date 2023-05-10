import { FC } from 'react';

import ControlBtns from '../components/main/ControlBtns';
import EditorBlock from '../components/main/EditorBlock';
import QueryBlock from '../components/main/QueryBlock';
import ResponseBlock from '../components/main/ResponseBlock';
import SchemaBlock from '../components/main/SchemaBlock';

const Main: FC = (): JSX.Element => {
  return (
    <main className="relative z-0 min-h-screen  w-screen bg-dark-blue">
      <div className="relative flex flex-col sm:flex-row">
        <div className="relative grid h-screen grid-cols-[80%_20%] grid-rows-[auto_auto] pt-[120px] transition-all sm:w-1/2 sm:grid-cols-[85%_15%] md:grid-cols-[90%_10%]">
          <EditorBlock />
          <ControlBtns />
          <div className="relative z-10 col-span-2 col-start-1 row-start-2 flex w-full flex-col self-end">
            <QueryBlock />
          </div>
        </div>
        <ResponseBlock />
        <SchemaBlock />
      </div>
    </main>
  );
};

export default Main;
