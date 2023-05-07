import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { ButtonForm } from '../components/Form/ButtonForm';
import FormName from '../components/Form/FormName';
import FormEmail from '../components/Form/FormEmail';
import FormPassword from '../components/Form/FormPassword';
import { Background } from '../components/Background';

const Register = () => {
  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueName(e.target.value);
    reset();
  };

  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueEmail(e.target.value);
    reset();
  };

  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValuePassword(e.target.value);
    reset();
  };

  const onSubmit: SubmitHandler<FieldValues> = () => {
    setValueName('');
    setValueEmail('');
    setValuePassword('');
    reset();
  };

  return (
    <section className="inline-block h-screen w-screen bg-dark-blue">
      <div className="absolute flex h-screen w-screen flex-col items-center justify-center ">
        <form
          className="z-10 flex w-1/2 min-w-[315px] max-w-7xl flex-col items-center justify-center rounded-[10px] bg-gray text-black min-[410px]:min-w-[400px] sm:min-w-[500px] md:min-w-[600px]"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex w-4/5 flex-col text-start min-[410px]:w-2/3">
            <h2 className="font-semibold-400 pt-5 font-Impact text-[40px]">
              {' '}
              <FormattedMessage id="SIGN_UP" />
            </h2>
            <FormName
              value={valueName}
              onChange={handleChangeName}
              register={register}
              errors={errors}
              label="name"
            />
            <FormEmail
              value={valueEmail}
              onChange={handleChangeEmail}
              register={register}
              errors={errors}
              label="email"
            />
            <FormPassword
              value={valuePassword}
              onChange={handleChangePassword}
              register={register}
              errors={errors}
              label="password"
            />
            <div className="form-row">
              <ButtonForm register={register} label="submit" page="register" />
            </div>
          </div>
          <div className="mt-3 flex flex-row">
            <p className="mr-3 pb-3">
              {' '}
              <FormattedMessage id="ALREADY_REGISTERED" />
            </p>
            <Link to="/sign-in">
              <span className="text-green underline hover:text-orange">
                {' '}
                <FormattedMessage id="SIGN_IN" />
              </span>
            </Link>
          </div>
        </form>
      </div>
      <Background />
    </section>
  );
};
export default Register;
