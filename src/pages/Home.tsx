import Logo from '../assets/svg/logo.svg';
import { Background } from '../components/Background';

const Home = () => {
  return (
    <section className="bg-dark-blue inline-block md:h-[800px] h-[1200px] w-screen">
      <div className="flex flex-col justify-end items-end absolute w-screen md:h-[800px] h-[1200px]">
        <div className="flex flex-col items-start w-3/4 mb-[28px] mr-[37px] z-10">
          <p className="ml-20 text-[20px] text-white font-semibold-700">Welcome to</p>
          <div className="flex items-center text-[40px] font-semibold-400 font-Impact justify-center gap-x-2.5 text-white ml-6 min-[370px]:mb-[0px] mb-[30px]">
            <Logo />
            <p className="ml-2">GraphiQL</p>
          </div>
          <p className="min-[370px]:inline-block hidden ml-6 mb-[40px] mt-[47px] text-white text-[16px] font-semibold-400">
            This is the final project on the React course at RSSchool
          </p>
          <div className="bg-gray flex flex-col p-6 rounded-[10px]">
            <h2 className="md:mb-[40px] mb-[20px] text-[24px] font-semibold-400">Meet our teem</h2>
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex flex-col justify-center items-center mb-2 md:mb-4">
                <div className="w-[165px] h-[134px] bg-middle-gray rounded-[10px]"></div>
                <p className="md:mt-5 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="flex flex-col items-center md:ml-4 mb-2 md:mb-4">
                <div className="w-[165px] h-[134px] bg-middle-gray rounded-[10px]"></div>
                <p className="md:mt-5 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="flex flex-col justify-center items-center md:ml-4 md:mb-4">
                <div className="w-[165px] h-[134px] bg-middle-gray rounded-[10px]"></div>
                <p className="md:mt-5 mt-2">
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
