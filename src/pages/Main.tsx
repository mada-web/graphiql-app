import { FC, Suspense, lazy, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase';
import { Spinner } from '../components/Spinner';
import ControlButtons from '../components/main/ControlButtons';
import EditorBlock from '../components/main/EditorBlock';
import QueryBlock from '../components/main/QueryBlock';
// import SchemaBlock from '../components/main/SchemaBlock';
// import ResponseBlock from '../components/main/ResponseBlock';
import useAppContext from '../hooks/useAppContext';

function delayForDemo(promise: Promise<typeof import('../components/main/ResponseBlock')>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}

const SchemaBlock = lazy(() => import('../components/main/SchemaBlock'));
const ResponseBlock = lazy(() => delayForDemo(import('../components/main/ResponseBlock')));

const Main: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const { isLoading } = useAppContext();

  useEffect(() => {
    if (!loading && !user) navigate('/');
  }, [user, navigate, loading]);

  return (
    <main className="relative z-0 flex min-h-[100vh-80px] w-screen flex-col overflow-hidden bg-dark-blue">
      <div className="mt-[80px] flex h-[40px] w-screen items-center justify-end bg-green p-2 text-white">
        <p className="mx-auto max-w-7xl">Hello, {user?.email}!</p>
      </div>
      <div className="relative flex flex-col sm:flex-row">
        <div className="relative grid h-screen grid-cols-[80%_20%] grid-rows-[auto_auto] pt-[120px] transition-all sm:w-1/2 sm:grid-cols-[85%_15%] md:grid-cols-[90%_10%]">
          <EditorBlock />
          <ControlButtons />
          <div className="relative z-10 col-span-2 col-start-1 row-start-2 flex w-full flex-col self-end">
            <QueryBlock />
          </div>
        </div>
        {isLoading ? (
          <section className="flex h-screen w-full items-start justify-center border-t-8 border-gray bg-dark-blue px-8 pt-16 transition-all sm:mt-[120px] sm:h-[calc(100vh-120px)] sm:min-h-0 sm:w-1/2 sm:border-t-0 sm:px-8 sm:pt-0">
            <Spinner />
          </section>
        ) : (
          <Suspense
            fallback={
              <section className="flex h-screen w-full items-start justify-center border-t-8 border-gray bg-dark-blue px-8 pt-16 transition-all sm:mt-[120px] sm:h-[calc(100vh-120px)] sm:min-h-0 sm:w-1/2 sm:border-t-0 sm:px-8 sm:pt-0">
                <Spinner />
              </section>
            }
          >
            <ResponseBlock />
          </Suspense>
        )}
        {isLoading ? (
          <section className="schema-block absolute top-[77px] z-10 flex h-[90vh] w-full min-w-fit items-start justify-center justify-self-end overflow-auto bg-query sm:right-0 sm:top-0 sm:h-screen sm:w-[calc(50vw)] sm:pt-[84px] lg:static lg:w-1/2">
            <Spinner />
          </section>
        ) : (
          <Suspense
            fallback={
              <section className="schema-block absolute top-[77px] z-10 flex h-[90vh] w-full min-w-fit items-start justify-center justify-self-end overflow-auto bg-query sm:right-0 sm:top-0 sm:h-screen sm:w-[calc(50vw)] sm:pt-[84px] lg:static lg:w-1/2">
                <Spinner />
              </section>
            }
          >
            <SchemaBlock />
          </Suspense>
        )}
      </div>
    </main>
  );
};

export default Main;
