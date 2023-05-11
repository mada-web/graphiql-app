import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase';
import ControlButtons from '../components/main/ControlButtons';
import EditorBlock from '../components/main/EditorBlock';
import QueryBlock from '../components/main/QueryBlock';
import ResponseBlock from '../components/main/ResponseBlock';

const Main: FC = (): JSX.Element => {
  const [isQueryParams, setIsQueryParams] = useState(false);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/');
  }, [navigate, user]);

  const showQueryEditor = () => {
    setIsQueryParams((prev) => !prev);
  };

  return (
    <main className="relative z-0 h-screen w-screen bg-dark-blue">
      <div className="grid h-[100%] grid-cols-1 grid-rows-1 pt-[120px] sm:grid-cols-2">
        <div className="grid grid-cols-[90%_10%] grid-rows-[auto_auto]">
          <EditorBlock />
          <ControlButtons />
          <div className="min-x-[20%] relative z-10 col-span-2 col-start-1 row-start-2 flex w-full flex-col self-end transition-all">
            <button
              onClick={showQueryEditor}
              className="w-[80%] self-center rounded-t-lg bg-green py-2 text-center transition-all lg:ml-10 lg:w-1/3 lg:self-start"
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
