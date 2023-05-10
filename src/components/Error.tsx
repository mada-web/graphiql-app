import { FC } from 'react';

const ErrorMessage: FC = (): JSX.Element => {
  const refreshPage = (e) => {
    e.preventDefault();
    history.go();
  };

  const returnToPrevPage = (e) => {
    e.preventDefault();

    history.back();

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-dark-blue">
      <h1 className="mt-[47px] text-4xl text-white">Something went wrong...</h1>
      <p className="mt-6 text-2xl text-white">Please, try again later.</p>
      <button
        onClick={(e) => refreshPage(e)}
        className="col-span-3 mt-4 justify-self-center rounded-md bg-green px-16 py-3 sm:col-span-1"
      >
        REFRESH
      </button>

      <button
        onClick={(e) => returnToPrevPage(e)}
        className="col-span-3 mt-4 justify-self-center rounded-md bg-green px-16 py-3 sm:col-span-1"
      >
        GO BACK
      </button>
    </div>
  );
};

export default ErrorMessage;
