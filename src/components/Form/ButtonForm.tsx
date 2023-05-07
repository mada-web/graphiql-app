import { FC } from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

import { DataFormCard } from '../../types/types';

interface InputTitleProps {
  register: UseFormRegister<FieldValues>;
  label: Path<DataFormCard>;
  page: string;
}

export const ButtonForm: FC<InputTitleProps> = (props) => {
  const { register, label, page } = props;

  return (
    <div className="mt-4">
      <input
        className="bg-green p-3 rounded-md w-full transition-all hover:bg-green/70 active:bg-orange"
        type="submit"
        {...register(label, {
          required: 'Enter a data',
        })}
        value={page === 'login' ? 'Sign In' : 'Sign Up'}
      />
    </div>
  );
};
