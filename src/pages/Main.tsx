import { FC, useEffect, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase';
import ControlButtons from '../components/main/ControlButtons';
import EditorBlock from '../components/main/EditorBlock';
import QueryBlock from '../components/main/QueryBlock';
import ResponseBlock from '../components/main/ResponseBlock';
import { Spinner } from '../components/Spinner';
import useAppContext from '../hooks/useAppContext';

const Schema = lazy(() => import('../components/main/SchemaBlock'));

const Main: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { isShowSchema } = useAppContext();

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading && !user) navigate('/');
  }, [user, navigate, loading]);

  return (
    <main className="relative z-0 min-h-screen w-screen overflow-hidden bg-dark-blue">
      <div className="relative flex flex-col sm:flex-row">
        <div className="relative grid h-screen grid-cols-[80%_20%] grid-rows-[auto_auto] pt-[120px] transition-all sm:w-1/2 sm:grid-cols-[85%_15%] md:grid-cols-[90%_10%]">
          <EditorBlock />
          <ControlButtons />
          <div className="relative z-10 col-span-2 col-start-1 row-start-2 flex w-full flex-col self-end">
            <QueryBlock />
          </div>
        </div>
        <ResponseBlock />
        {isShowSchema && (
          <Suspense fallback={<Spinner />}>
            <Schema />
          </Suspense>
        )}
      </div>
    </main>
  );
};

export default Main;
