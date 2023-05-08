import Logo from '../assets/svg/logo.svg';
import { Background } from '../components/Background';

const Home = () => {
  return (
    <section className="inline-block h-[1200px] w-screen bg-dark-blue md:h-[800px] min-[1400px]:h-screen">
      <div className="absolute flex h-[1200px] w-screen flex-col items-end justify-end md:h-[800px] min-[1400px]:h-screen">
        <div className="z-10 mb-[28px] mr-[37px] flex w-3/4 flex-col items-start">
          <p className="font-semibold-700 ml-20 text-[20px] text-white">Welcome to</p>
          <div className="font-semibold-400 mb-[20px] ml-6 flex items-center justify-center gap-x-2.5 font-Impact text-[40px] text-white min-[370px]:mb-[0px]">
            <Logo />
            <p className="ml-2">GraphiQL</p>
          </div>
          <p className="font-semibold-400 mb-[40px] ml-6 mt-[47px] hidden text-[16px] text-white min-[370px]:inline-block">
            This is the final project on the React course at RSSchool
          </p>
          <div className="flex flex-col rounded-[10px] bg-gray p-6">
            <h2 className="font-semibold-400 mb-[20px] text-[24px] md:mb-[40px]">Meet our teem</h2>
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-2 flex flex-col items-center justify-center md:mb-4">
                <div className="h-[134px] w-[165px] rounded-[10px] bg-middle-gray"></div>
                <p className="mt-2 md:mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="mb-2 flex flex-col items-center md:mb-4 md:ml-4">
                <div className="h-[134px] w-[165px] rounded-[10px] bg-middle-gray"></div>
                <p className="mt-2 md:mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="flex flex-col items-center justify-center md:mb-4 md:ml-4">
                <div className="h-[134px] w-[165px] rounded-[10px] bg-middle-gray"></div>
                <p className="mt-2 md:mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua
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
