import { useIntl } from 'react-intl';
import React, { FC, useEffect, useRef, useState } from 'react';
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';

import { DataFormCard } from '../../types/types';
import Lock from '../../assets/svg/lock.svg';
import Eye from '../../assets/svg/eye.svg';
import CloseEye from '../../assets/svg/eye-close.svg';

interface InputPasswordProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  label: Path<DataFormCard>;
}

const FormPassword: FC<InputPasswordProps> = (props) => {
  const [isReveal, setIsReveal] = useState(false);
  const [click, setClick] = useState(false);
  const intl = useIntl();
  const { value, onChange, register, errors, label } = props;
  const [cursor, setCursor] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { ref } = register('password');

  useEffect(() => {
    const input = inputRef.current;
    if (input) input.setSelectionRange(cursor, cursor);
  }, [inputRef, cursor, value]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setCursor(target.selectionEnd);
    onChange && onChange(e);
  };

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
