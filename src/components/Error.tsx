import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';

const ErrorMessage: FC = (): JSX.Element => {
  const refreshPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.go();
  };

  const returnToPrevPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    history.back();

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <article className="flex h-screen w-screen flex-col items-center justify-center bg-dark-blue">
      <h1 className="mt-[47px] text-4xl text-white">
        <FormattedMessage id="ERROR1" />
      </h1>
      <p className="mt-6 text-2xl text-white">
        <FormattedMessage id="ERROR2" />
      </p>
      <button
        onClick={(e) => refreshPage(e)}
        className="col-span-3 mt-4 justify-self-center rounded-md bg-green px-16 py-3 transition-all hover:bg-green/70 active:bg-orange sm:col-span-1"
      >
        <FormattedMessage id="ERROR3" />
      </button>

      <button
        onClick={(e) => returnToPrevPage(e)}
        className="col-span-3 mt-4 justify-self-center rounded-md bg-green px-16 py-3 transition-all hover:bg-green/70 active:bg-orange sm:col-span-1"
      >
        <FormattedMessage id="ERROR4" />
      </button>
    </article>
  );
};

export default ErrorMessage;
