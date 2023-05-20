import React, { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, logInWithEmailAndPassword } from '../firebase';
import FormEmail from '../components/Form/FormEmail';
import FormPassword from '../components/Form/FormPassword';
import { Background } from '../components/Background';
import { ButtonForm } from '../components/Form/ButtonForm';
import { Spinner } from '../components/Spinner';
import notifyUser from '../utils/toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/main');
  }, [navigate, user]);

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
      await logInWithEmailAndPassword(email, password);
      reset();
      setIsLoading(false);
    } catch (error: unknown) {
      setIsLoading(false);
      if (error instanceof Error) {
        notifyUser(error.toString());
      }
    }
  };

  return (
    <section className="mt-8 inline-block h-screen w-screen bg-dark-blue min-[1400px]:mt-0">
      <div className="absolute flex h-screen w-screen flex-col items-center justify-center ">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col">
            <div className="flex flex-row place-self-center">
              <div className="z-10 -mr-[10px] mt-[7px] h-[40px] w-[80px] items-center rounded-[10px] bg-white p-2 text-center text-green">
                <FormattedMessage id="HELLO" />!
              </div>
              <div className="z-0 -mb-[50px] h-[100px] w-[100px] bg-[url('./ufo.png')] bg-cover bg-no-repeat" />
            </div>
            <form
              className="z-10 flex w-1/2 min-w-[315px] max-w-7xl flex-col items-center justify-center rounded-[10px] bg-gray text-black min-[410px]:min-w-[400px] sm:min-w-[500px] md:min-w-[600px]"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="flex w-4/5 flex-col text-start min-[410px]:w-2/3">
                <h2 className="font-semibold-400 pt-5 font-Impact text-[40px]">
                  <FormattedMessage id="SIGN_IN" />
                </h2>
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
                  <ButtonForm register={register} label="submit" page="login" />
                </div>
              </div>
              <div className="mt-3 flex flex-row">
                <p className="mr-3 pb-3">
                  <FormattedMessage id="NOT_A_MEMBER" />
                </p>
                <Link to="/sign-up">
                  <span className="text-green underline hover:text-orange">
                    <FormattedMessage id="SIGN_UP" />
                  </span>
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>
      <Background />
    </section>
  );
};
export default Login;
