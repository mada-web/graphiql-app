import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FormattedMessage } from 'react-intl';

import Close from '../assets/svg/close.svg';
import { LOCALES } from '../lang/locales';

import { auth, logout } from '../firebase';
import useAppContext from '../hooks/useAppContext';

interface IBurger {
  onClose: () => void;
}

const Burger: FC<IBurger> = ({ onClose }): JSX.Element => {
  const { currentLocale, handleLocale } = useAppContext();
  const [user] = useAuthState(auth);

  const handleLogOut = () => {
    logout();
    onClose();
  };

  return (
    <div
      className="fixed z-30 flex h-screen w-screen items-start justify-end bg-white/40"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <li className="query-block-enter z-30 flex h-[250px] w-[180px] flex-col items-start justify-start rounded-[10px] bg-gray p-6 text-dark-blue sm:hidden">
        <button
          className="place-self-end"
          onClick={() => {
            onClose();
          }}
        >
          <Close />
        </button>
        {user ? (
          <>
            <NavLink
              className="px-3 pb-[2px] pt-3 font-semibold leading-7 transition-all hover:border-b-2 hover:pb-[0px]"
              to="main"
              onClick={onClose}
            >
              <FormattedMessage id="MAIN" />
            </NavLink>
            <Link
              className="px-3 pb-[2px] pt-3 font-semibold leading-7 transition-all hover:border-b-2 hover:pb-[0px]"
              onClick={handleLogOut}
              to={'/'}
            >
              <FormattedMessage id="LOG_OUT" />
            </Link>
          </>
        ) : (
          <>
            <NavLink
              className="px-3 pb-[2px] pt-3 font-semibold leading-7 transition-all hover:border-b-2 hover:pb-[0px]"
              to="sign-in"
              onClick={onClose}
            >
              <FormattedMessage id="SIGN_IN" />
            </NavLink>
            <NavLink
              className="px-3 pb-[2px] pt-3 font-semibold leading-7 transition-all hover:border-b-2 hover:pb-[0px]"
              to="sign-up"
              onClick={onClose}
            >
              <FormattedMessage id="SIGN_UP" />
            </NavLink>
          </>
        )}
        <div className="mt-6 flex px-3 py-2.5">
          <span className="mr-3 font-semibold ">EN</span>
          <label htmlFor="lang" className="relative h-5 w-10 cursor-pointer rounded-full bg-black">
            <input
              type="checkbox"
              id="lang"
              className="peer sr-only"
              checked={currentLocale !== LOCALES.ENGLISH}
              onChange={(e) => handleLocale(e)}
            />
            <span className="peer absolute left-0.5 top-0.5 h-4/5 w-2/5 rounded-full bg-green transition-all duration-200 peer-checked:left-5" />
          </label>
          <span className="ml-3 font-semibold">Ru</span>
        </div>
      </li>
    </div>
  );
};

export default Burger;
