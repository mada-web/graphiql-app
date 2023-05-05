import React, { FC } from 'react';
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';

import { DataFormCard } from '../../types/types';
import Lock from '../../assets/svg/lock.svg';

interface InputPasswordProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  label: Path<DataFormCard>;
}

const FormPassword: FC<InputPasswordProps> = (props) => {
  const { value, onChange, register, errors, label } = props;
  return (
    <>
      <div className="flex mt-2">
        <label htmlFor="password">
          <div className="bg-green p-3 rounded-l-md">
            <Lock />
          </div>
        </label>
        <input
          className="rounded-r-md w-full pl-3"
          placeholder="Enter password ..."
          type="password"
          maxLength={12}
          value={value}
          {...register(label, {
            required: 'Enter a password',
            minLength: {
              value: 8,
              message: 'Min length must be more 8',
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[!@#$%^&*"'{}<>])(?=.*[a-zA-Z]).{8,}$/,
              message: 'Must be 1 letter, 1 digit, 1 special character',
            },
          })}
          onChange={onChange}
        />
      </div>
      <div className="h-8 text-red">
        {errors?.password && <p>{`${errors.password?.message}` || 'Error'}</p>}
      </div>
    </>
  );
};

export default FormPassword;
