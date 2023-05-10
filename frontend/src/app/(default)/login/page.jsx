'use client';
import React, { useState, useEffect } from 'react';
import Input from '../../components/Input.jsx';
import { Checkbox } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    emailError: '',
    passwordError: '',
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

  const handleSumbit = (e) => {
    e.preventDefault();
    setForm({
      email: '',
      password: '',
    });
    //ToDo: some code here
  };

  const { email, password } = form;

  const { emailError, passwordError } = validationErrors;

  return (
    <div className="w-[80%] flex h-full flex-col mx-auto mt-10">
      <div className="center flex justify-center items-center flex-col">
        <div className="body flex flex-col gap-3 justify-center items-center w-[70%]">
          <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold mb-8 text-gray-700">
            Login Page
          </h1>
          <Input
            onChangeForm={handleChangeForm}
            name="email"
            error={emailError}
            value={email}
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
          <div className="flex items-center">
            <Checkbox />
            <label
              className="xl:text-lg text-sm"
              htmlFor="remember"
            >
              Remember me
            </label>
          </div>
          <button
            onClick={(e) => handleSumbit(e)}
            className="xl:text-lg lg:text-base text-sm  bg-black  text-white py-2 px-4 rounded-full hover:bg-green-700 transition ease-in cursor-pointer"
          >
            SIGN UP
          </button>

          <div className="flex justify-center">
            <p className="xl:text-base  text-sm font-normal text-gray-600">
              Don't have an account?
              <Link href="/register">
                <span className="xl:text-base  text-sm cursor-pointer text-blue-500 hover:underline transition ease-in duration-150">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
          {/* <div className="social-login flex justify-center items-center gap-4 w-full">
            <div className="w-9 h-9 bg-blue-500 flex justify-center items-center rounded-sm">
              <FacebookIcon
                fontSize="medium"
                className="cursor-pointer text-white"
              />
            </div>
            <div className="w-9 h-9 bg-orange-200 flex justify-center items-center rounded-sm">
              <GoogleIcon
                fontSize="medium"
                className="cursor-pointer text-white"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
