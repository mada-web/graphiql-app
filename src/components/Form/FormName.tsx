import { FC, useRef } from 'react';
import { useIntl } from 'react-intl';

import useInput from '../../hooks/useInput';
import Person from '../../assets/svg/person-login.svg';

import { InputProps } from './FormEmail';

const FormName: FC<InputProps> = (props) => {
  const { value, onChange, register, errors, label } = props;

  const intl = useIntl();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { ref } = register('name');

  const { handleInput } = useInput({ ref: inputRef, value, onChange });

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
          placeholder={intl.formatMessage({ id: 'NAME_PLACEHOLDER' })}
          type="text"
          value={value}
          {...register(label, {
            required: intl.formatMessage({ id: 'NAME_VALIDATION' }),
            minLength: {
              value: 2,
              message: intl.formatMessage({ id: 'NAME_MIN_LENGTH' }),
            },
            maxLength: {
              value: 20,
              message: intl.formatMessage({ id: 'NAME_MAX_LENGTH' }),
            },
            pattern: {
              value: /^[A-ZА-Я][a-zA-ZА-Яа-я ]+$/,
              message: intl.formatMessage({ id: 'NAME_PATTERN' }),
            },
          })}
          ref={(e: HTMLInputElement) => {
            ref(e);
            inputRef.current = e;
          }}
          name="name"
          onChange={handleInput}
        />
      </div>
      <div className="h-10 text-red">
        {errors?.name && <p>{`${errors.name?.message}` || 'Error'}</p>}
      </div>
    </>
  );
};

export default FormName;
