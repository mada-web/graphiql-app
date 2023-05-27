import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';

import { DataFormCard } from '../../types/types';
import Email from '../../assets/svg/email.svg';

interface InputEmailProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  label: Path<DataFormCard>;
}

const FormEmail: FC<InputEmailProps> = (props) => {
  const { value, onChange, register, errors, label } = props;
  const intl = useIntl();

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
          type="email"
          value={value}
          {...register(label, {
            required: intl.formatMessage({ id: 'EMAIL_VALIDATION' }),
            pattern: {
              value:
                /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/i,
              message: intl.formatMessage({ id: 'EMAIL_PATTERN' }),
            },
          })}
          onChange={onChange}
        />
      </div>
      <div className="h-10 text-red">
        {errors?.email && <p>{`${errors.email?.message}` || 'Error'}</p>}
      </div>
    </>
  );
};

export default FormEmail;
