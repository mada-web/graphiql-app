import { NavLink } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Logo from '../assets/svg/logo.svg';
import Person from '../assets/svg/person.svg';
import { LOCALES } from '../lang/locales';

export interface IHeaderProps {
  locale: string;
  handleLocale: (e) => void;
}

const Header: FC<IHeaderProps> = ({ handleLocale, locale }): JSX.Element => {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 10) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };

    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <header
      className={`fixed z-20 p-4 top-0 left-0 w-screen transition-all duration-200 ${
        animateHeader ? 'bg-green text-dark-blue' : 'bg-gray'
      }`}
    >
      <ul className="flex items-center justify-between list-none">
        <li className="person group relative flex items-center gap-x-6 rounded-lg leading-6">
          <NavLink
            className="flex items-center text-[32px] font-semibold-400 font-Impact justify-center gap-x-2.5 hover:text-white"
            to="/"
          >
            <Logo />
            GraphiQL
          </NavLink>
        </li>
        <li className="sm:flex sm-flex-col sm:gap-x-12 mr-4">
          <NavLink
            className="-mx-3 person flex items-center block rounded-lg px-3 py-2.5 font-semibold leading-7 hover:text-white"
            to="sign-in"
          >
            <Person />
            <p className="relative left-[10px]">
              <FormattedMessage id="SIGN_IN" />
            </p>
          </NavLink>
          <NavLink
            className="-mx-3 block rounded-lg px-3 py-2.5 font-semibold leading-7 hover:text-white"
            to="sign-up"
          >
            <FormattedMessage id="SIGN_UP" />
          </NavLink>
          <NavLink
            className="-mx-3 block rounded-lg px-3 py-2.5 font-semibold leading-7 hover:text-white"
            to="/"
          >
            <FormattedMessage id="LOG_OUT" />
            <span aria-hidden="true">&rarr;</span>
          </NavLink>
          <div className="px-3 py-2.5 flex">
            <span className="font-semibold mr-3 ">Ru</span>
            <label
              htmlFor="lang"
              className="relative bg-black w-10 h-5 rounded-full cursor-pointer"
            >
              <input
                type="checkbox"
                id="lang"
                className="sr-only peer"
                checked={locale !== LOCALES.RUSSIAN}
                onChange={(e) => handleLocale(e)}
              />
              <span className="w-2/5 h-4/5 bg-green absolute rounded-full left-0.5 top-0.5 peer-checked:left-5 transition-all duration-200 peer" />
            </label>
            <span className="font-semibold ml-3">En</span>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
