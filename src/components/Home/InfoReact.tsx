import { FormattedMessage } from 'react-intl';

const InfoReact = () => {
  return (
    <>
      <p className="text-[20px] text-green">
        <FormattedMessage id="INTRO1" />
      </p>
      <div className="mt-[10px] hidden flex-row items-center justify-center gap-x-2.5 text-[16px] min-[500px]:mb-[0px] min-[500px]:flex">
        <p>
          <FormattedMessage id="INTRO2" />
        </p>
        <p>&bull;</p>
        <p>
          <FormattedMessage id="INTRO3" />
        </p>
        <p>&bull;</p>
        <p>
          <FormattedMessage id="INTRO4" />
        </p>
      </div>
      <p className="mt-[10px] hidden text-[16px] min-[500px]:inline-block">
        <FormattedMessage id="INTRO5" />
      </p>
    </>
  );
};
export default InfoReact;
