import React, { FC, useRef } from 'react';
import { useIntl } from 'react-intl';
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';

import { DataFormCard } from '../../types/types';
import Email from '../../assets/svg/email.svg';
import useInput from '../../hooks/useInput';

export interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  label: Path<DataFormCard>;
}

const FormEmail: FC<InputProps> = (props) => {
  const { value, onChange, register, errors, label } = props;

  const intl = useIntl();
  const { ref } = register('email');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { handleInput } = useInput({ ref: inputRef, value, onChange });

  return (
    <>
      <div className="mt-2 flex">
        <label htmlFor="email">
          <div className="rounded-l-md bg-green p-3">
            <Email />
          </div>
        </label>
        <input
          className="w-full rounded-r-md pl-3"
          placeholder={intl.formatMessage({ id: 'EMAIL_PLACEHOLDER' })}
          type="text"
          value={value}
          {...register(label, {
            required: intl.formatMessage({ id: 'EMAIL_VALIDATION' }),
            pattern: {
              value:
                /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/i,
              message: intl.formatMessage({ id: 'EMAIL_PATTERN' }),
            },
          })}
          ref={(e: HTMLInputElement) => {
            ref(e);
            inputRef.current = e;
          }}
          name="email"
          onChange={handleInput}
        />
      </div>
      <div className="h-10 text-red">
        {errors?.email && <p>{`${errors.email?.message}` || 'Error'}</p>}
      </div>
    </>
  );
};

export default FormEmail;
