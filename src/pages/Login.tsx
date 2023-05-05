import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ButtonForm } from '../components/Form/ButtonForm';
import FormEmail from '../components/Form/FormEmail';
import FormPassword from '../components/Form/FormPassword';

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
  };
  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValuePassword(e.target.value);
  };

  const onSubmit: SubmitHandler<FieldValues> = () => {
    setValueEmail('');
    setValuePassword('');
    reset();
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center bg-dark-blue">
      <form
        className="max-w-7xl flex flex-col w-1/2 justify-center items-center bg-gray text-black rounded-[10px] min-w-[300px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-2/3 text-start">
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
            <ButtonForm register={register} errors={errors} label="submit" page="login" />
          </div>
        </div>
        <div className="flex flex-row mt-3">
          <p className="mr-3 pb-3">Not a member yet?</p>
          <Link to="/sign-up">
            <span className="text-green underline">Sign Up</span>
          </Link>
        </div>
      </form>
    </section>
  );
};
export default Login;
