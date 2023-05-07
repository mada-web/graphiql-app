import { Link, NavLink } from 'react-router-dom';

import { FC, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Logo from '../assets/svg/logo.svg';
import { LOCALES } from '../lang/locales';
import BurgerMenu from '../assets/svg/burger.svg';

import { Burger } from './Burger';

export interface IHeaderProps {
  locale: string;
  handleLocale: (e) => void;
}

const Header: FC<IHeaderProps> = ({ handleLocale, locale }): JSX.Element => {
  const [animateHeader, setAnimateHeader] = useState(false);
  const [click, setClick] = useState(false);

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

  const handleClosing = () => {
    setClick(false);
  };
  return (
    <>
      <header
        className={`fixed z-20 p-4 top-0 left-0 w-screen transition-all duration-200 ${
          animateHeader ? 'bg-green text-dark-blue' : 'bg-gray'
        }`}
      >
        <ul className="max-w-7xl mx-auto flex items-center justify-between list-none">
          <li className="white relative flex items-center gap-x-6 leading-6">
            <Link
              className="flex items-center text-[32px] font-semibold-400 font-Impact justify-center gap-x-2.5 transition-all hover:text-white"
              to="/"
            >
              <Logo />
              GraphiQL
            </Link>
          </li>
          <span
            className="sm:hidden"
            onClick={() => {
              setClick(!click);
            }}
          >
            <BurgerMenu />
          </span>
          <li className="relative sm:flex hidden flex-row gap-16">
            <NavLink
              className="p-3 font-semibold transition-all leading-7 hover:border-b-2"
              to="sign-in"
            >
              <FormattedMessage id="SIGN_IN" />
            </NavLink>
            <NavLink
              className="p-3 font-semibold leading-7 transition-all hover:border-b-2"
              to="sign-up"
            >
              <FormattedMessage id="SIGN_UP" />
            </NavLink>
            <NavLink className="p-3 font-semibold leading-7 transition-all hover:border-b-2" to="/">
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
      {click && <Burger onClose={handleClosing} />}
    </>
  );
};

export default Header;
