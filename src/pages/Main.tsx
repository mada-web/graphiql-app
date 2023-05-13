import { FC, lazy, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase';
// import ControlButtons from '../components/main/ControlButtons';
// import EditorBlock from '../components/main/EditorBlock';
// import QueryBlock from '../components/main/QueryBlock';
// import ResponseBlock from '../components/main/ResponseBlock';
// import SchemaBlock from '../components/main/SchemaBlock';
const EditorBlock = lazy(() => import('../components/main/EditorBlock'));
const QueryBlock = lazy(() => import('../components/main/QueryBlock'));
const ResponseBlock = lazy(() => import('../components/main/ResponseBlock'));
const SchemaBlock = lazy(() => import('../components/main/SchemaBlock'));
const ControlButtons = lazy(() => import('../components/main/ControlButtons'));

const Main: FC = (): JSX.Element => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/main');
  }, [navigate, user]);

  return (
    <main className="relative flex flex-col z-0 min-h-screen w-screen overflow-hidden bg-dark-blue">
      <div className="p-2 mt-[80px] w-screen h-[40px] bg-green text-white flex items-center justify-end">
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
        <ResponseBlock />
        <SchemaBlock />
      </div>
    </main>
  );
};

export default Main;
