import { NavLink } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

import Logo from '../assets/svg/logo.svg';
import Person from '../assets/svg/person.svg';

const Header = () => {
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
      className={`fixed left-0 top-0 z-10 w-screen p-4 transition-all duration-200 ${
        animateHeader ? 'bg-green text-dark-blue' : 'bg-gray'
      }`}
    >
      <ul className="flex list-none items-center justify-between">
        <li className="person group relative flex items-center gap-x-6 rounded-lg leading-6">
          <NavLink
            className="font-semibold-400 flex items-center justify-center gap-x-2.5 font-Impact text-[32px] hover:text-white"
            to="/"
          >
            <Logo />
            GraphiQL
          </NavLink>
        </li>
        <li className="sm-flex-col mr-4 sm:flex sm:gap-x-12">
          <NavLink
            className="person -mx-3 block flex items-center rounded-lg px-3 py-2.5 font-semibold leading-7 hover:text-white"
            to="sign-in"
          >
            <Person />
            <p className="relative left-[10px]">Sign in</p>
          </NavLink>
          <NavLink
            className="-mx-3 block rounded-lg px-3 py-2.5 font-semibold leading-7 hover:text-white"
            to="sign-up"
          >
            Sign up
          </NavLink>
          <NavLink
            className="-mx-3 block rounded-lg px-3 py-2.5 font-semibold leading-7 hover:text-white"
            to="/"
          >
            LogOut<span aria-hidden="true">&rarr;</span>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
