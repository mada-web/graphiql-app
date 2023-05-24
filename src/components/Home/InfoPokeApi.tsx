import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

const InfoPokeApi = () => {
  const intl = useIntl();

  return (
    <>
      <div className="mt-16 flex w-full flex-col items-center gap-6 rounded-[10px] bg-query p-6 text-center text-dark-blue">
        <h2 className="font-semibold-400 text-[32px]">
          <FormattedMessage id="INTRO_API1" />
        </h2>
        <p>
          <FormattedMessage id="INTRO_API2" />
        </p>
        <p className="-mt-[25px]">
          <FormattedMessage id="INTRO_API3" />
        </p>
        <p>
          <FormattedMessage id="INTRO_API4" />
        </p>
        <p>
          <FormattedMessage id="INTRO_API5" />
        </p>
        <Link className="mt-4 w-[215px]" to="sign-up">
          <input
            className="w-full rounded-md bg-green p-3 text-white transition-all hover:bg-green/70 active:bg-orange"
            type="submit"
            value={intl.formatMessage({ id: 'SIGN_UP' })}
          />
        </Link>
      </div>
    </>
  );
};
export default InfoPokeApi;
