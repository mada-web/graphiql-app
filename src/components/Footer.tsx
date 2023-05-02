import Github from '../assets/svg/github.svg';
import RSLogo from '../assets/svg/rsschool.svg';
import Graph from '../assets/svg/graph.svg';

function Footer() {
  return (
    <footer className="w-screen">
      <div className="h-[3.75rem] bg-gray"></div>
      <ul
        className="mx-auto h-[29rem] max-w-7xl items-center justify-between p-6 lg:px-8 text-white"
      >
        <li className="group relative flex items-center gap-x-6 rounded-lg p-4  hover:text-gray-400">
          <a
            className="flex items-center justify-center gap-x-2.5"
            href="https://github.com/mada-web"
          >
            <Github />
            mada-web
          </a>
        </li>
        <li className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:text-gray-400">
          <a
            className="flex items-center justify-center gap-x-2.5 fill-current"
            href="https://github.com/dairinka"
          >
            <Github />
            dairinka
          </a>
        </li>
        <li className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:text-gray-400">
          <a
            className="flex items-center justify-center gap-x-2.5"
            href="https://github.com/Mary190183/"
          >
            <Github />
            Mary190183
          </a>
        </li>
      </ul>
      <div className="h-[3.61rem] bg-green">
        <ul
          className="mx-auto flex max-w-7xl items-center justify-between p-2"
        >
          <li className="group relative flex items-center gap-x-6 rounded-lg">
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
}

export default Footer;
