import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { auth, logout } from '../firebase';

import Logo from '../assets/svg/logo.svg';
import { LOCALES } from '../lang/locales';
import BurgerMenu from '../assets/svg/burger.svg';

import { Burger } from './Burger';

export interface IHeaderProps {
  locale: string;
  handleLocale: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Header: FC<IHeaderProps> = ({ handleLocale, locale }): JSX.Element => {
  const [animateHeader, setAnimateHeader] = useState(false);
  const [click, setClick] = useState(false);
  const [user] = useAuthState(auth);

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
        className={`fixed left-0 top-0 z-20 w-screen p-4 transition-all duration-200 ${
          animateHeader ? 'bg-green text-dark-blue' : 'bg-gray'
        }`}
      >
        <ul className="mx-auto flex max-w-7xl list-none items-center justify-between">
          <li className="white relative flex items-center gap-x-6 leading-6">
            <Link
              className="font-semibold-400 flex items-center justify-center gap-x-2.5 font-Impact text-[32px] transition-all hover:text-white"
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
          <li className="relative hidden flex-row gap-16 sm:flex">
            {!user && (
              <>
                <NavLink
                  className="p-3 font-semibold leading-7 transition-all hover:border-b-2"
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
              </>
            )}
            {user && (
              <>
                <NavLink
                  className="p-3 font-semibold leading-7 transition-all hover:border-b-2"
                  to="/main"
                >
                  <FormattedMessage id="MAIN" />
                </NavLink>
                <NavLink
                  className="p-3 font-semibold leading-7 transition-all hover:border-b-2"
                  to="/"
                  onClick={logout}
                >
                  <FormattedMessage id="LOG_OUT" />
                </NavLink>
              </>
            )}
            <div className="flex px-3 py-2.5">
              <span className="mr-3 font-semibold ">Ru</span>
              <label
                htmlFor="lang"
                className="relative h-5 w-10 cursor-pointer rounded-full bg-black"
              >
                <input
                  type="checkbox"
                  id="lang"
                  className="peer sr-only"
                  checked={locale !== LOCALES.RUSSIAN}
                  onChange={(e) => handleLocale(e)}
                />
                <span className="peer absolute left-0.5 top-0.5 h-4/5 w-2/5 rounded-full bg-green transition-all duration-200 peer-checked:left-5" />
              </label>
              <span className="ml-3 font-semibold">En</span>
            </div>
          </li>
        </ul>
      </header>
      {click && <Burger onClose={handleClosing} />}
    </>
  );
};

export default Header;
