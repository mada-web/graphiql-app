import React, { FC } from 'react';
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { DataFormCard } from '../../types/types';
import Person from '../../assets/svg/person-login.svg';

interface InputTitleProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  label: Path<DataFormCard>;
}

const FormName: FC<InputTitleProps> = (props) => {
  const { value, onChange, register, errors, label } = props;
  const intl = useIntl();

  return (
    <>
      <div className="mt-2 flex">
        <label htmlFor="Name" className="rounded-l-md bg-green p-3">
          <div className="bg-green">
            <Person />
          </div>
        </label>
        <input
          className="w-full rounded-r-md pl-3"
          placeholder={intl.formatMessage({ id: 'PASS_PLACEHOLDER' })}
          type="text"
          value={value}
          maxLength={20}
          {...register(label, {
            required: intl.formatMessage({ id: 'NAME_VALIDATION' }),
            minLength: {
              value: 2,
              message: intl.formatMessage({ id: 'NAME_MIN_LENGTH' }),
            },
            pattern: {
              value: /^[A-ZА-Я][a-zA-ZА-Яа-я]+$/,
              message: intl.formatMessage({ id: 'NAME_PATTERN' }),
            },
          })}
          onChange={onChange}
        />
      </div>
      <div className="h-4 text-red">
        {errors?.name && <p>{`${errors.name?.message}` || 'Error'}</p>}
      </div>
    </>
  );
};

export default FormName;
