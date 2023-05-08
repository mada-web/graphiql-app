import React, { FC } from 'react';
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';

import { DataFormCard } from '../../types/types';
import Email from '../../assets/svg/email.svg';

interface InputEmailProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  label: Path<DataFormCard>;
}

const FormEmail: FC<InputEmailProps> = (props) => {
  const { value, onChange, register, errors, label } = props;
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
          placeholder="Enter email ..."
          type="email"
          value={value}
          {...register(label, {
            required: 'Enter a email',
            pattern: {
              value:
                /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*(?:[@])(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/i,
              message: 'Invalid e-mail',
            },
          })}
          onChange={onChange}
        />
      </div>
      <div className="h-4 text-red">
        {errors?.email && <p>{`${errors.email?.message}` || 'Error'}</p>}
      </div>
    </>
  );
};

export default FormEmail;
