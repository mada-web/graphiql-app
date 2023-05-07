import { useIntl } from 'react-intl';
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
  errors: FieldErrors;
  label: Path<DataFormCard>;
}

const FormPassword: FC<InputPasswordProps> = (props) => {
  const { value, onChange, register, errors, label } = props;
  const [isReveal, setIsReveal] = useState(false);
  const [click, setClick] = useState(false);
  const intl = useIntl();

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
          placeholder={intl.formatMessage({ id: 'PASS_PLACEHOLDER' })}
          type={isReveal ? 'text' : 'password'}
          maxLength={12}
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
