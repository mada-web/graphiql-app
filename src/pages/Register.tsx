import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ButtonForm } from '../components/Form/ButtonForm';
import FormName from '../components/Form/FormName';
import FormEmail from '../components/Form/FormEmail';
import FormPassword from '../components/Form/FormPassword';

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
  };
  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueEmail(e.target.value);
  };
  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValuePassword(e.target.value);
  };

  const onSubmit: SubmitHandler<FieldValues> = () => {
    setValueName('');
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
          <h2 className="text-[40px] font-semibold-400 font-Impact pt-5">Sign Up</h2>
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
            <ButtonForm register={register} errors={errors} label="submit" page="register" />
          </div>
        </div>
        <div className="flex flex-row mt-3">
          <p className="mr-3 pb-3">Already on GraphiQL?</p>
          <Link to="/sign-in">
            <span className="text-green underline">Sign In</span>
          </Link>
        </div>
      </form>
    </section>
  );
};
export default Register;
