'use client';
import React, { useState, useEffect } from 'react';
import Input from '../../components/Input.jsx';
import Link from 'next/link';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    usernameError: '',
    emailError: '',
    passwordError: '',
    repeatPasswordError: '',
  });

  const handleChangeForm = (e) => {
    setValidationErrors({});
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    });
    setValidationErrors({});
    //ToDo: some code here
  };

  const { username, email, password, repeatPassword } = form;

  const { usernameError, emailError, passwordError, repeatPasswordError } =
    validationErrors;

  useEffect(() => {
    if (password !== repeatPassword) {
      setValidationErrors({ repeatPasswordError: 'parololar uyusmuyor' });
    }
  }, [repeatPassword]);

  return (
    <div className="w-[80%] flex h-full flex-col mx-auto mt-10">
      <div className="center flex justify-center items-center flex-col">
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold mb-8 text-gray-700">
          Welcome Register Page
        </h1>
        <div className="body flex flex-col gap-3 w-[75%] items-center">
          <Input
            onChangeForm={handleChangeForm}
            value={username}
            name="username"
            label="Username"
            required={true}
            error={usernameError}
            variant="outlined"
            description="İsminizi giriniz"
          />
          <Input
            onChangeForm={handleChangeForm}
            name="email"
            value={email}
            error={emailError}
            label="Email"
            required={true}
            variant="outlined"
            description="lutfen mail formatinda giriniz"
          />
          <Input
            onChangeForm={handleChangeForm}
            name="password"
            value={password}
            error={passwordError}
            label="Password"
            inputType="password"
            required={true}
            variant="outlined"
            description="lutfen parolanızı dogru girinzi"
          />
          <Input
            onChangeForm={handleChangeForm}
            value={repeatPassword}
            error={repeatPasswordError}
            errorMessage={repeatPasswordError}
            name="repeatPassword"
            label="Repeat Password"
            inputType="password"
            required={true}
            variant="outlined"
            description="yukarıdakı parola kısmı ile aynı olmalı"
          />

          <div className="mt-5">
            <button
              onClick={(e) => handleSubmit(e)}
              className="bg-black w-full xl:text-base  text-sm text-white py-2 px-4 rounded-full hover:bg-green-700 transition ease-in cursor-pointer"
            >
              SIGN UP
            </button>
          </div>

          <div className="flex justify-center mb-2">
            <p className="xl:text-base text-sm">
              Already have an account?{' '}
              <Link href="/login">
                <span className="xl:text-base  text-sm cursor-pointer text-blue-500 hover:underline transition ease-in duration-150">
                  Sign In
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
