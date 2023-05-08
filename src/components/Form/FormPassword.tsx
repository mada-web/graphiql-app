import React, { FC, useState } from 'react';
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';

import { DataFormCard } from '../../types/types';
import Lock from '../../assets/svg/lock.svg';
import Eye from '../../assets/svg/eye.svg';
import CloseEye from '../../assets/svg/eye-close.svg';

interface InputPasswordProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  label: Path<DataFormCard>;
}

const FormPassword: FC<InputPasswordProps> = (props) => {
  const { value, onChange, register, errors, label } = props;
  const [isReveal, setIsReveal] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="mt-2 flex">
        <label htmlFor="password">
          <div className="rounded-l-md bg-green p-3">
            <Lock />
          </div>
        </label>
        <input
          className="w-full rounded-r-md pl-3"
          placeholder="Enter password ..."
          type={isReveal ? 'text' : 'password'}
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
        <span
          className="ml-[-51px] pr-[10px]"
          onClick={() => {
            setClick(!click);
            setIsReveal(!isReveal);
          }}
        >
          {click ? <Eye /> : <CloseEye />}
        </span>
      </div>
      <div className="h-8 text-red">
        {errors?.password && <p>{`${errors.password?.message}` || 'Error'}</p>}
      </div>
    </>
  );
};

export default FormPassword;
