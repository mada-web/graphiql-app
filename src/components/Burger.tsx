import { ChangeEvent, FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FormattedMessage } from 'react-intl';

import Close from '../assets/svg/close.svg';

import { IHeaderProps } from './Header';
import { auth, logout } from '../firebase';
import { LOCALES } from '../lang/locales';

interface ModalProps extends IHeaderProps {
  onClose: () => void;
  locale: string;
  handleLocale: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Burger: FC<ModalProps> = ({ onClose, handleLocale, locale }): JSX.Element => {
  const [user] = useAuthState(auth);

  return (
    <div
      className="fixed z-30 flex h-screen w-screen items-start justify-end bg-white/40"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <li className="z-30 flex h-[300px] w-[180px] flex-col items-start justify-start rounded-[10px] bg-gray p-6 text-dark-blue sm:hidden">
        <button
          className="place-self-end"
          onClick={() => {
            onClose();
          }}
        >
          <Close />
        </button>
        {!user && (
          <>
<NavLink
          className="border-b-2 border-transparent p-3 font-semibold leading-7 transition-all hover:border-black"
          to="sign-in"
          onClick={() => {
            onClose();
          }}
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
          <span className="mr-3 font-semibold ">EN</span>
          <label htmlFor="lang" className="relative h-5 w-10 cursor-pointer rounded-full bg-black">
            <input
              type="checkbox"
              id="lang"
              className="peer sr-only"
              checked={locale !== LOCALES.ENGLISH}
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
