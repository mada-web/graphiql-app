import { FormattedMessage } from 'react-intl';

import Logo from '../assets/svg/logo.svg';
import { Background } from '../components/Background';

const Home = () => {
  return (
    <section className="inline-block h-[1600px] w-screen bg-dark-blue min-[354px]:h-[1500px] min-[455px]:h-[1400px] sm:h-[1300px] md:h-[1000px] min-[830px]:h-[900px] min-[1400px]:h-screen">
      <div className="absolute flex h-[1600px] w-screen flex-col items-end justify-end min-[354px]:h-[1500px] min-[455px]:h-[1400px] sm:h-[1300px] md:h-[1000px] min-[830px]:h-[900px] min-[1400px]:h-screen">
        <div className="z-10 mb-[28px] mr-[37px] flex w-3/4 flex-col items-start">
          <p className="font-semibold-700 ml-20 text-[20px] text-white">
            <FormattedMessage id="WELCOME" />
          </p>
          <div className="font-semibold-400 mb-[20px] ml-6 flex items-center justify-center gap-x-2.5 font-Impact text-[40px] text-white min-[500px]:mb-[0px]">
            <Logo />
            <p className="ml-2">GraphiQL</p>
          </div>
          <p className="font-semibold-400 mb-[40px] ml-6 mt-[47px] hidden text-[16px] text-white min-[500px]:inline-block">
            <FormattedMessage id="INTRO" />
          </p>
          <div className="flex flex-col rounded-[10px] bg-gray p-6">
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
