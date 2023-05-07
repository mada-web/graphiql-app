import { NavLink } from 'react-router-dom';

import { useEffect, useState } from 'react';

import Logo from '../assets/svg/logo.svg';
import Person from '../assets/svg/person.svg';
import BurgerMenu from '../assets/svg/burger.svg';

import { Burger } from './Burger';

const Header = () => {
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
          <li className="person group relative flex items-center gap-x-6 rounded-lg leading-6">
            <NavLink
              className="flex items-center text-[32px] font-semibold-400 font-Impact justify-center gap-x-2.5 transition-all hover:text-white"
              to="/"
            >
              <Logo />
              GraphiQL
            </NavLink>
          </li>
          <span
            className="sm:hidden"
            onClick={() => {
              setClick(!click);
            }}
          >
            <BurgerMenu />
          </span>
          <li className="relative sm:flex hidden flex-row sm:gap-x-12">
            <NavLink
              className="-mx-3 person flex items-center block rounded-lg px-3 py-2.5 font-semibold transition-all leading-7 hover:text-white"
              to="sign-in"
            >
              <Person />
              <p className="relative left-[10px]">Sign in</p>
            </NavLink>
            <NavLink
              className="-mx-3 block rounded-lg px-3 py-2.5 font-semibold leading-7 transition-all hover:text-white"
              to="sign-up"
            >
              Sign up
            </NavLink>
            <NavLink
              className="-mx-3 block rounded-lg px-3 py-2.5 font-semibold leading-7 transition-all hover:text-white"
              to="/"
            >
              LogOut<span aria-hidden="true">&rarr;</span>
            </NavLink>
          </li>
        </ul>
      </header>
      {click && <Burger onClose={handleClosing} />}
    </>
  );
};

export default Header;
