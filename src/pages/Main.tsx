import { FC, useEffect, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase';
import { SchemaData, Type } from '../types/types';
import { defaultSchemaObj } from '../providers/AppProviders';

import getSchema from '../utils/getSchema';
import useAppContext from '../hooks/useAppContext';
import QueryBlock from '../components/main/QueryBlock';
import EditorBlock from '../components/main/EditorBlock';
import ResponseBlock from '../components/main/ResponseBlock';
import ControlButtons from '../components/main/ControlButtons';

const SchemaBlock = lazy(() => import('../components/main/Schema/SchemaBlock'));

const Main: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const { setSchema, setSchemaData, schema, isShowSchema } = useAppContext();

  useEffect(() => {
    if (!loading && !user) navigate('/');

    const getDocs = async () => {
      const { data } = (await getSchema()) as SchemaData;
      const queries = data.__schema.types.find(
        (el: { name: string }) => el.name === 'Query'
      ) as Type;

      setSchemaData(data.__schema);
      setSchema(() => (queries.fields ? queries.fields : [defaultSchemaObj]));
    };

    if (user && schema[0] === defaultSchemaObj) {
      getDocs();
    }
  }, [user, navigate, loading]);

  return (
    <>
      <div className="mt-[80px] h-[40px] w-screen bg-green py-2 text-white">
        {user && <p className="text-center">Hello, {user?.email}!</p>}
      </div>

      <main className="relative z-0 min-h-[calc(100vh-120px)] w-screen overflow-hidden bg-dark-blue">
        <div className="relative flex flex-col sm:flex-row">
          <div className="relative grid h-[calc(100vh-100px)] grid-cols-[80%_20%] grid-rows-[auto_auto] pt-[20px] transition-all sm:w-1/2 sm:min-w-[50%] sm:grid-cols-[85%_15%] md:grid-cols-[90%_10%]">
            <EditorBlock />
            <ControlButtons />
            <div className="relative z-10 col-span-2 col-start-1 row-start-2 flex grow flex-col self-end">
              <QueryBlock />
            </div>
          </div>
          <ResponseBlock />
          {isShowSchema && (
            <Suspense fallback={null}>
              <SchemaBlock />
            </Suspense>
          )}
        </div>
      </main>
    </>
  );
};

export default Main;
