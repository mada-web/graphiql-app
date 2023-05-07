import { NavLink } from 'react-router-dom';

import Person from '../assets/svg/person.svg';
import Close from '../assets/svg/close.svg';

interface ModalProps {
  onClose: () => void;
}

export const Burger = (props: ModalProps) => {
  const { onClose } = props;
  return (
    <div
      data-testid="modal"
      className="h-screen flex fixed z-30 bg-white/40 w-screen items-start justify-end"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <li className="p-6 flex items-start justify-start sm:hidden flex-col w-[180px] h-[200px] bg-gray text-dark-blue rounded-[10px] z-30">
        <button
          className="place-self-end"
          onClick={() => {
            onClose();
          }}
        >
          <Close />
        </button>
        <NavLink
          className="-mx-3 person flex items-center block rounded-lg px-3 py-2.5 font-semibold leading-7 hover:text-white"
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
    </div>
  );
};
