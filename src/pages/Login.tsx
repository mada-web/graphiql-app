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
    <section className="w-screen h-screen inline-block bg-dark-blue">
      <div className="absolute w-screen h-screen flex flex-col justify-center items-center ">
        <form
          className="max-w-7xl flex flex-col w-1/2 justify-center items-center bg-gray text-black rounded-[10px] min-[410px]:min-w-[400px] min-w-[315px] md:min-w-[600px] sm:min-w-[500px] z-10"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex flex-col w-4/5 min-[410px]:w-2/3 text-start">
            <h2 className="text-[40px] font-semibold-400 font-Impact pt-5">Sign In</h2>
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
          <div className="flex flex-row mt-3">
            <p className="mr-3 pb-3">Not a member yet?</p>
            <Link to="/sign-up">
              <span className="text-green underline hover:text-middle-gray">Sign Up</span>
            </Link>
          </div>
        </form>
      </div>
      <Background />
    </section>
  );
};
export default Login;
