import { FormattedMessage } from 'react-intl';

import LogoGreen from '../assets/svg/logo-green.svg';
import { Background } from '../components/Background';

const Home = () => {
  return (
    <section className="inline-block h-[1500px] w-screen bg-dark-blue min-[370px]:h-[1450px] min-[455px]:h-[1400px] sm:h-[1300px] md:h-[1000px] min-[830px]:h-[900px] min-[1400px]:h-screen">
      <div className="absolute flex h-[1500px] w-screen flex-col items-end justify-end min-[370px]:h-[1450px] min-[455px]:h-[1400px] sm:h-[1300px] md:h-[1000px] min-[830px]:h-[900px] min-[1400px]:h-screen">
        <div className="z-10 mb-[28px] mr-[37px] flex w-3/4 flex-col">
          <div className="font-semibold-400 flex flex-col self-center text-center text-white">
            <p className="hidden text-[20px] text-green min-[320px]:inline-block">
              <FormattedMessage id="INTRO1" />
            </p>
            <div className="mt-[10px] flex flex-row items-center justify-center gap-x-2.5 text-[16px] min-[500px]:mb-[0px]">
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
            <p className="mb-[30px] mt-[10px] text-[16px]">
              <FormattedMessage id="INTRO5" />
            </p>
            <div className="mb-[20px] flex items-center justify-center gap-x-2.5 font-Impact text-[40px] min-[500px]:mb-[0px]">
              <LogoGreen />
              <p className="ml-2  text-blue">GraphiQL</p>
            </div>
            <p className="mt-[17px] hidden text-[16px] min-[400px]:inline-block">
              <FormattedMessage id="INTRO6" />
            </p>
            <p className="mb-[30px] mt-[17px] text-[16px]">
              <FormattedMessage id="INTRO7" />
            </p>
          </div>
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
        </div>
      </div>
      <Background />
    </section>
  );
};
export default Home;
