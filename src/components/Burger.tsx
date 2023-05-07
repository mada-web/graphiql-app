import { NavLink } from 'react-router-dom';

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
      <li className="p-6 flex items-start justify-start sm:hidden flex-col w-[180px] h-[250px] bg-gray text-dark-blue rounded-[10px] z-30">
        <button
          className="place-self-end"
          onClick={() => {
            onClose();
          }}
        >
          <Close />
        </button>
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
    </div>
  );
};
