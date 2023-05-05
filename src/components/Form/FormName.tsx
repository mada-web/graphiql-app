import React, { FC } from 'react';
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';

import { DataFormCard } from '../../types/types';
import Person from '../../assets/svg/person-login.svg';

interface InputTitleProps {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  label: Path<DataFormCard>;
}

const FormName: FC<InputTitleProps> = (props) => {
  const { value, onChange, register, errors, label } = props;
  return (
    <>
      <div className="flex mt-2">
        <label htmlFor="Name" className="bg-green p-3 rounded-l-md">
          <div className="bg-green">
            <Person />
          </div>
        </label>
        <input
          className="rounded-r-md w-full pl-3"
          placeholder="Enter name ..."
          type="text"
          value={value}
          maxLength={20}
          {...register(label, {
            required: 'Enter a name',
            minLength: {
              value: 2,
              message: 'Min length must be more 2',
            },
            pattern: {
              value: /^[A-Z][a-zA-Z]+$/,
              message: 'Letters must be Latin and begin with capital letter',
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
