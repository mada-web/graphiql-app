import { FormattedMessage } from 'react-intl';

const InfoTeem = () => {
  return (
    <>
      <div className="flex flex-col rounded-[10px] bg-gray p-6 text-dark-blue">
        <h2 className="font-semibold-400 mb-[20px] text-[24px] md:mb-[40px]">
          <FormattedMessage id="TEAM_MEET" />
        </h2>
        <div className="grid grid-rows-1 items-start md:grid-cols-3">
          <div className="mb-2 flex flex-col items-center justify-center md:mb-4">
            <div className="h-[155px] w-[165px] rounded-[10px] bg-[url('./Artsem.jpeg')] bg-cover bg-center bg-no-repeat "></div>
            <h2 className="mt-1 font-semibold md:mt-2">
              <FormattedMessage id="ARTEM_NAME" />
            </h2>
            <p className="mt-1 md:mt-2">
              <FormattedMessage id="ARTEM_INFO" />
            </p>
          </div>
          <div className="mb-2 flex flex-col items-center md:mb-4 md:ml-4">
            <div className="h-[155px] w-[165px] rounded-[10px] bg-[url('./Iryna.jpg')] bg-cover bg-center bg-no-repeat "></div>
            <h2 className="mt-1 font-semibold md:mt-2">
              <FormattedMessage id="IRINA_NAME" />
            </h2>
            <p className="mt-1 md:mt-2">
              <FormattedMessage id="IRINA_INFO" />
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:mb-4 md:ml-4">
            <div className="h-[155px] w-[165px] rounded-[10px] bg-[url('./Masha.jpg')] bg-cover bg-center bg-no-repeat "></div>
            <h2 className="mt-1 font-semibold md:mt-2">
              <FormattedMessage id="MASHA_NAME" />
            </h2>
            <p className="mt-1 md:mt-2">
              <FormattedMessage id="MASHA_INFO" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default InfoTeem;
