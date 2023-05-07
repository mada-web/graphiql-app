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
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');

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
    <section className="w-screen h-screen inline-block bg-dark-blue">
      <div className="absolute w-screen h-screen flex flex-col justify-center items-center ">
        <form
          className="max-w-7xl flex flex-col w-1/2 justify-center items-center bg-gray text-black rounded-[10px] min-[410px]:min-w-[400px] min-w-[315px] md:min-w-[600px] sm:min-w-[500px] z-10"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex flex-col w-4/5 min-[410px]:w-2/3 text-start">
            <h2 className="text-[40px] font-semibold-400 font-Impact pt-5">
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
          <div className="flex flex-row mt-3">
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
