import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
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
      className={`h-25 z-10 fixed top-0 left-0 w-screen transition-all duration-200 ${
        animateHeader ? 'bg-gray-300' : 'bg-white'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
          <NavLink
            className="flex items-center justify-center gap-x-2.5 font-semibold"
            to="/"
          >
            <img
              className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
              src="../../public/favicon.png"
              alt="logo"
            />
            Graphql
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink
            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            to="/sigh-up"
          >
            Sigh up
          </NavLink>
          <NavLink
            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            to="/sigh-in"
          >
            Sign in
          </NavLink>
          <NavLink
            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            to="/"
          >
            LogOut<span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
