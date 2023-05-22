import LogoGreen from '../assets/svg/logo-green.svg';

import { Background } from '../components/Background';
import InfoTeem from '../components/Home/InfoTeem';
import InfoReact from '../components/Home/InfoReact';
import InfoPokeApi from '../components/Home/InfoPokeApi';

const Home = () => {
  return (
    <main className="flex h-[1470px] w-screen bg-dark-blue min-[395px]:h-[1420px] min-[465px]:h-[1400px] min-[585px]:h-[1350px] sm:h-[1300px] md:h-[1000px] min-[950px]:h-[900px] min-[1400px]:h-screen">
      <section className="absolute flex h-[1470px] w-screen flex-col items-end justify-end min-[395px]:h-[1420px] min-[465px]:h-[1400px] min-[585px]:h-[1350px] sm:h-[1300px] md:h-[1000px] min-[950px]:h-[900px] min-[1400px]:h-screen">
        <div className="z-10 mb-[28px] mr-[37px] flex w-3/4 flex-col">
          <div className="font-semibold-400 -mx-[20px] flex flex-col self-center text-center text-white">
            <InfoReact />
            <div className="mb-[20px] mt-[30px] flex items-center justify-center gap-x-2.5 font-Impact text-[40px] min-[500px]:mb-[0px]">
              <LogoGreen />
              <p className="ml-2  text-blue">GraphiQL</p>
            </div>
            <InfoPokeApi />
          </div>
          <InfoTeem />
        </div>
      </section>
      <Background />
    </main>
  );
};
export default Home;
