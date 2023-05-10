import React, { FC, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';

import { ButtonForm } from '../components/Form/ButtonForm';
import FormName from '../components/Form/FormName';
import FormEmail from '../components/Form/FormEmail';
import FormPassword from '../components/Form/FormPassword';
import { Background } from '../components/Background';
import { auth, registerWithEmailAndPassword } from '../firebase';
import { Spinner } from '../components/Spinner';

const Register: FC = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const [user, error] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  useEffect(() => {
    if (user) navigate('/main');
  }, [navigate, user]);

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
    reset();
  };

  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
    reset();
  };

  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
    reset();
  };

  const onSubmit: SubmitHandler<FieldValues> = async () => {
    try {
      setIsLoading(true);
      await registerWithEmailAndPassword(name, email, password);
      reset();
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      alert(error);
    }
  };

  return (
    <section className="mt-8 inline-block h-screen w-screen bg-dark-blue min-[1400px]:mt-0">
      <div className="absolute flex h-screen w-screen flex-col items-center justify-center ">
        {isLoading ? (
          <Spinner />
        ) : (
          <form
            className="z-10 flex w-1/2 min-w-[315px] max-w-7xl flex-col items-center justify-center rounded-[10px] bg-gray text-black min-[410px]:min-w-[400px] sm:min-w-[500px] md:min-w-[600px]"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="flex w-4/5 flex-col text-start min-[410px]:w-2/3">
              <h2 className="font-semibold-400 pt-5 font-Impact text-[40px]">
                <FormattedMessage id="SIGN_UP" />
              </h2>
              <FormName
                value={name}
                onChange={handleChangeName}
                register={register}
                errors={errors}
                label="name"
              />
              <FormEmail
                value={email}
                onChange={handleChangeEmail}
                register={register}
                errors={errors}
                label="email"
              />
              <FormPassword
                value={password}
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
                <FormattedMessage id="ALREADY_REGISTERED" />
              </p>
              <Link to="/sign-in">
                <span className="text-green underline hover:text-orange">
                  <FormattedMessage id="SIGN_IN" />
                </span>
              </Link>
            </div>
          </form>
        )}
      </div>
      <Background />
    </section>
  );
};

export default Register;
