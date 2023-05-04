import Github from '../assets/svg/github.svg';
import RSLogo from '../assets/svg/rsschool.svg';
import Graph from '../assets/svg/graph.svg';

const Footer = () => {
  return (
    <footer className="w-screen bg-dark-blue">
      <div className="h-[3.75rem] bg-gray" />
      <div className="mx-auto h-[29rem] max-w-7xl flex items-center justify-between max-w-7xl overflow-hidden">
        <ul className="relative block content-center text-white">
          <h2 className="font-normal text-[32px] relative left-[20px]">
            Team:
          </h2>
          <hr className="w-[162px] h-[2px] text-green" />
          <li className=" li group relative flex items-center gap-x-6 rounded-lg p-4  hover:text-green">
            <a
              className="flex items-center justify-center gap-x-2.5 "
              href="https://github.com/mada-web"
            >
              <Github />
              mada-web
            </a>
          </li>
          <li className="li group relative flex items-center gap-x-6 rounded-lg p-4 hover:text-green">
            <a
              className="flex items-center justify-center gap-x-2.5 fill-current"
              href="https://github.com/dairinka"
            >
              <Github />
              dairinka
            </a>
          </li>
          <li className="li group relative flex items-center gap-x-6 rounded-lg p-4 hover:text-green">
            <a
              className="flex items-center justify-center gap-x-2.5"
              href="https://github.com/Mary190183/"
            >
              <Github />
              Mary190183
            </a>
          </li>
        </ul>
        <img
          className="relative top-[-100px] left-[250px] w-[539px] h-[463px] object-none"
          src="./element.png"
          alt="element"
        />
        <img src="./Bazz.png" alt="Bazz" />
      </div>
      <div className="h-[3.61rem] bg-green">
        <ul className="mx-auto flex max-w-7xl items-center justify-between p-2">
          <li className="person group relative flex items-center gap-x-6 rounded-lg">
            <a
              className="flex items-center justify-center"
              href="https://rs.school/react/"
            >
              <RSLogo />
            </a>
          </li>
          <Graph />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
