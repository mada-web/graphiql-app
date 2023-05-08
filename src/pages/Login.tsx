import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { ButtonForm } from '../components/Form/ButtonForm';
import FormEmail from '../components/Form/FormEmail';
import FormPassword from '../components/Form/FormPassword';
import { Background } from '../components/Background';

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');

  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueEmail(e.target.value);
    reset();
  };
  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValuePassword(e.target.value);
    reset();
  };

  const onSubmit: SubmitHandler<FieldValues> = () => {
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
            <h2 className="font-semibold-400 pt-5 font-Impact text-[40px]">Sign In</h2>
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
              <ButtonForm register={register} label="submit" page="login" />
            </div>
          </div>
          <div className="mt-3 flex flex-row">
            <p className="mr-3 pb-3">Not a member yet?</p>
            <Link to="/sign-up">
              <span className="text-green underline hover:text-orange">Sign Up</span>
            </Link>
          </div>
        </form>
      </div>
      <Background />
    </section>
  );
};
export default Login;
