import { FC } from 'react';
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';

import { DataFormCard } from '../../types/types';

interface InputTitleProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  label: Path<DataFormCard>;
  page: string;
}

export const ButtonForm: FC<InputTitleProps> = (props) => {
  const { register, errors, label, page } = props;

  return (
    <div className="mt-4">
      <input
        className="bg-green p-3 rounded-md w-full"
        type="submit"
        {...register(label, {
          required: 'Enter a data',
        })}
        value={page === 'login' ? 'Sign In' : 'Sign Up'}
      />
      <div className="h-4 text-red">
        {(errors?.name || errors?.email || errors?.password) && <p>Please, enter correct data!</p>}
      </div>
    </div>
  );
};
