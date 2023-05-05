import { Link } from 'react-router-dom';

import Github from '../assets/svg/github.svg';
import RSLogo from '../assets/svg/rsschool.svg';
import Graph from '../assets/svg/graph.svg';

const Footer = () => {
  return (
    <footer className="w-screen bg-dark-blue">
      <div className="h-[3.75rem] bg-gray" />
      <div className="mx-auto h-[29rem] max-w-7xl flex items-center justify-between max-w-7xl overflow-hidden">
        <ul className="relative block content-center text-white">
          <h2 className="font-normal text-[32px] relative left-[20px]">Team:</h2>
          <hr className="w-[162px] h-[2px] text-green" />
          <li className=" li group relative flex items-center gap-x-6 rounded-lg p-4  hover:text-green">
            <Link
              className="flex items-center justify-center gap-x-2.5 "
              to="https://github.com/mada-web"
            >
              <Github />
              mada-web
            </Link>
          </li>
          <li className="li group relative flex items-center gap-x-6 rounded-lg p-4 hover:text-green">
            <Link
              className="flex items-center justify-center gap-x-2.5 fill-current"
              to="https://github.com/dairinka"
            >
              <Github />
              dairinka
            </Link>
          </li>
          <li className="li group relative flex items-center gap-x-6 rounded-lg p-4 hover:text-green">
            <Link
              className="flex items-center justify-center gap-x-2.5"
              to="https://github.com/Mary190183/"
            >
              <Github />
              Mary190183
            </Link>
          </li>
        </ul>
        <img
          className="relative top-[-100px] left-[250px] w-[539px] h-[463px] object-none hidden lg:inline-block"
          src="./element.png"
          alt="element"
        />
        <img className="hidden sm:inline-block" src="./Bazz.png" alt="Bazz" />
      </div>
      <div className="h-[3.61rem] bg-green">
        <ul className="mx-auto flex max-w-7xl items-center justify-between p-2">
          <li className="person group relative flex items-center gap-x-6 rounded-lg">
            <Link className="flex items-center justify-center" to="https://rs.school/react/">
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
