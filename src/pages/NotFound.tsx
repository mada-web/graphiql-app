import { useNavigate } from 'react-router-dom';

const NotFound = (): JSX.Element => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate('/');
  };

  return (
    <div className="mt-20 relative max-w-screen-xl h-[500px]  text-white bg-opacity-25 bg-center bg-no-repeat bg-[url('src/assets/img/bg_404.png')] bg-content">
      <div className="absolute top-[40px] right-20 text-center">
        <h1 className="text-7xl font-bold font-Impact tracking-wider">404</h1>
        <h2 className="text-2xl font-bold mt-4 font-sans">Page not found</h2>
      </div>
      <div className="absolute bottom-10 grid grid-cols-3 grid-rows-1 w-4/5 mx-auto inset-x-0 items-center">
        <span className="justify-self-center">
          Ups, something went wrong...{' '}
        </span>
        <button
          className="bg-green px-16 py-3 rounded-md justify-self-center"
          onClick={routeChange}
        >
          go to home
        </button>
      </div>
    </div>
  );
};
export default NotFound;
