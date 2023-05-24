import { FormattedMessage } from 'react-intl';

import PokeApiLogo from '../assets/svg/poke-api-logo.svg';

import { Background } from '../components/Background';
import InfoTeem from '../components/Home/InfoTeem';
import InfoReact from '../components/Home/InfoReact';
import InfoPokeApi from '../components/Home/InfoPokeApi';

const Home = () => {
  return (
    <main className="flex min-h-max w-screen bg-dark-blue">
      <section className="relative z-10 mx-auto my-[28px] flex w-3/4 flex-col">
        <div className="mx-auto flex flex-col text-[20px] text-white">
          <p className="-mb-[30px] ml-6 mt-[100px]">
            <FormattedMessage id="PLAYGROUND" />
          </p>
          <PokeApiLogo />
        </div>
        <InfoPokeApi />
        <InfoReact />
        <InfoTeem />
      </section>
      <Background />
    </main>
  );
};
export default Home;
