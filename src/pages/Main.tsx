import { FC, Suspense, lazy, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase';
import { Spinner } from '../components/Spinner';

const EditorBlock = lazy(() => import('../components/main/EditorBlock'));
import QueryBlock from '../components/main/QueryBlock';
const ResponseBlock = lazy(() => import('../components/main/ResponseBlock'));
const SchemaBlock = lazy(() => import('../components/main/SchemaBlock'));
import ControlButtons from '../components/main/ControlButtons';
const Main: FC = (): JSX.Element => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/');
  }, [navigate, user]);

  return (
    <main className="relative z-0 flex min-h-[100vh-80px] w-screen flex-col overflow-hidden bg-dark-blue">
      <div className="mt-[80px] flex h-[40px] w-screen items-center justify-end bg-green p-2 text-white">
        <p className="mx-auto max-w-7xl">Hello, {user?.email}!</p>
      </div>
      <div className="relative flex flex-col sm:flex-row">
        <div className="relative grid h-screen grid-cols-[80%_20%] grid-rows-[auto_auto] pt-[120px] transition-all sm:w-1/2 sm:grid-cols-[85%_15%] md:grid-cols-[90%_10%]">
          <Suspense
            fallback={
              <section className="relative z-0 flex max-h-max min-h-[60%] items-start justify-center pb-2 pl-1 sm:mr-2 sm:h-[calc(100%-1rem)] sm:pl-10">
                <Spinner />
              </section>
            }
          >
            <EditorBlock />
          </Suspense>
          <ControlButtons />
          <div className="relative z-10 col-span-2 col-start-1 row-start-2 flex w-full flex-col self-end">
            <QueryBlock />
          </div>
        </div>
        <Suspense
          fallback={
            <section className="flex h-screen w-full items-start justify-center border-t-8 border-gray bg-dark-blue px-8 pt-16 transition-all sm:mt-[120px] sm:h-[calc(100vh-120px)] sm:min-h-0 sm:w-1/2 sm:border-t-0 sm:px-8 sm:pt-0">
              <Spinner />
            </section>
          }
        >
          <ResponseBlock />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <SchemaBlock />
        </Suspense>
      </div>
    </main>
  );
};

export default Main;
