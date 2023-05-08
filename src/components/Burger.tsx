import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import Close from '../assets/svg/close.svg';
import { LOCALES } from '../lang/locales';

import { IHeaderProps } from './Header';

interface ModalProps extends IHeaderProps {
  onClose: () => void;
}

export const Burger: FC<ModalProps> = ({ onClose, locale, handleLocale }): JSX.Element => {
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
        <NavLink className="p-3 font-semibold leading-7 transition-all hover:border-b-2" to="/">
          <FormattedMessage id="LOG_OUT" />
          <span aria-hidden="true">&rarr;</span>
        </NavLink>
        <div className="mt-4 flex px-3 py-2.5">
          <span className="mr-3 font-semibold ">En</span>
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
