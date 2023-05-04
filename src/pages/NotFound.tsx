import { useNavigate } from 'react-router-dom';

const NotFound = (): JSX.Element => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate('/');
  };

  return (
    <div className="w-screen h-screen flex items-center">
      <div className="grow max-w-7xl grid grid-cols-3 grid-rows-[200px_auto_140px] h-[500px] mx-5  inset-x-0 text-white bg-center bg-no-repeat  bg-[url('./bg_404.png')] bg-content rounded-[20px] xl:mx-auto">
        <div className="text-center self-center row-start-2 col-start-1 col-span-3 sm:col-start-3 sm:row-start-1">
          <h1 className="text-7xl font-bold font-Impact tracking-wider">404</h1>
          <h2 className="text-2xl font-bold mt-4 font-sans">Page not found</h2>
        </div>
        <div className="self-center row-start-3 col-span-3 grid grid-cols-3 items-center">
          <span className="justify-self-center hidden sm:inline-block">
            Ups, something went wrong...{' '}
          </span>
          <button
            className="bg-green px-16 py-3 rounded-md justify-self-center col-span-3 sm:col-span-1 "
            onClick={routeChange}
          >
            Home page
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
