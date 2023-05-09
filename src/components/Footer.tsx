import { FC } from 'react';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import Github from '../assets/svg/github.svg';
import RSLogo from '../assets/svg/rsschool.svg';
import Graph from '../assets/svg/graph.svg';

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="-mt-[7px] inline-block w-screen bg-dark-blue">
      <div className="h-[3.75rem] bg-gray" />
      <div className="mx-auto flex h-[29rem] max-w-7xl items-center justify-between overflow-hidden">
        <ul className="relative block content-center text-white">
          <div className="flex flex-col items-center">
            <h2 className="relative text-[32px] font-normal">
              <FormattedMessage id="TEAM" />
            </h2>
            <hr className="h-[2px] w-[162px] text-green" />
          </div>
          <li className=" li group relative flex items-center gap-x-6 rounded-lg p-4  hover:text-green">
            <Link
              className="flex items-center justify-center gap-x-2.5 transition-all"
              to="https://github.com/mada-web"
            >
              <Github />
              mada-web
            </Link>
          </li>
          <li className="li relative flex items-center gap-x-6 p-4 hover:text-green">
            <Link
              className="flex items-center justify-center gap-x-2.5 fill-current transition-all"
              to="https://github.com/dairinka"
            >
              <Github />
              dairinka
            </Link>
          </li>
          <li className="li relative flex items-center gap-x-6 p-4 hover:text-green">
            <Link
              className="flex items-center justify-center gap-x-2.5 transition-all"
              to="https://github.com/Mary190183/"
            >
              <Github />
              Mary190183
            </Link>
          </li>
        </ul>
        <div className="z-0 -mr-[250px] hidden h-[463px] w-[539px] bg-[url('./element_1.png')] bg-no-repeat md:inline-block" />
        <img className="z-10 hidden sm:inline-block" src="./Bazz.png" alt="Bazz" />
      </div>
      <div className="h-[3.61rem] bg-green">
        <ul className="mx-auto flex max-w-7xl items-center justify-between p-2">
          <li className="person relative flex items-center gap-x-6 transition-all">
            <Link
              className=" white flex items-center justify-center transition-all"
              to="https://rs.school/react/ "
            >
              <RSLogo />
            </Link>
          </li>
          <Graph />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
