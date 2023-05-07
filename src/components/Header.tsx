import { Link, NavLink } from 'react-router-dom';

import { useEffect, useState } from 'react';

import Logo from '../assets/svg/logo.svg';
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
              Sign in
            </NavLink>
            <NavLink
              className="p-3 font-semibold leading-7 transition-all hover:border-b-2"
              to="sign-up"
            >
              Sign up
            </NavLink>
            <NavLink className="p-3 font-semibold leading-7 transition-all hover:border-b-2" to="/">
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
