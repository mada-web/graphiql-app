import { useIntl } from 'react-intl';
import React, { FC, useRef, useState } from 'react';

import { InputProps } from './FormEmail';

import Lock from '../../assets/svg/lock.svg';
import Eye from '../../assets/svg/eye.svg';
import CloseEye from '../../assets/svg/eye-close.svg';
import useInput from '../../hooks/useInput';

const FormPassword: FC<InputProps> = (props) => {
  const [click, setClick] = useState(false);
  const [isReveal, setIsReveal] = useState(false);

  const { value, onChange, register, errors, label } = props;

  const { ref } = register('password');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const intl = useIntl();

  const { handleInput } = useInput({ ref: inputRef, value, onChange });

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
          placeholder={intl.formatMessage({ id: 'PASS_PLACEHOLDER' })}
          type={isReveal ? 'text' : 'password'}
          value={value}
          {...register(label, {
            required: intl.formatMessage({ id: 'PASSWORD_VALIDATION' }),
            minLength: {
              value: 8,
              message: intl.formatMessage({ id: 'PASSWORD_MIN_LENGTH' }),
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[!@#$%^&*"'{}<>])(?=.*[a-zA-Z]).{8,}$/,
              message: intl.formatMessage({ id: 'PASSWORD_PATTERN' }),
            },
          })}
          ref={(e: HTMLInputElement) => {
            ref(e);
            inputRef.current = e;
          }}
          name="password"
          onChange={handleInput}
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
