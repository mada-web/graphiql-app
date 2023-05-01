import Github from '../assets/github.svg';
import RSLogo from '../assets/rsschool.svg';

function Footer() {
  return (
    <footer className="h-25 z-10 w-screen">
      <ul
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <li className="group relative flex items-center gap-x-6 rounded-lg p-4 text-gray-400 hover:text-black">
          <a
            className="flex items-center justify-center gap-x-2.5"
            href="https://github.com/mada-web"
          >
            <Github />
            mada-web
          </a>
        </li>
        <li className="group relative flex items-center gap-x-6 rounded-lg p-4 text-gray-400 hover:text-black">
          <a
            className="flex items-center justify-center gap-x-2.5 fill-current"
            href="https://github.com/dairinka"
          >
            <Github />
            dairinka
          </a>
        </li>
        <li className="group relative flex items-center gap-x-6 rounded-lg p-4 text-gray-400 hover:text-black">
          <a
            className="flex items-center justify-center gap-x-2.5"
            href="https://github.com/Mary190183/"
          >
            <Github />
            Mary190183
          </a>
        </li>
        <li className="text-gray-400">@2023</li>
        <li className="group relative flex items-center gap-x-6 rounded-lg p-4">
          <a
            className="flex items-center justify-center"
            href="https://rs.school/react/"
          >
            <RSLogo />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
