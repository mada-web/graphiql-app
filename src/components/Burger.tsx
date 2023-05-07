import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Close from '../assets/svg/close.svg';

interface ModalProps {
  onClose: () => void;
}

export const Burger: FC<ModalProps> = ({ onClose }): JSX.Element => {
  return (
    <div
      data-testid="modal"
      className="fixed z-30 flex h-screen w-screen items-start justify-end bg-white/40"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <li className="z-30 flex h-[250px] w-[180px] flex-col items-start justify-start rounded-[10px] bg-gray p-6 text-dark-blue sm:hidden">
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
    </div>
  );
};
