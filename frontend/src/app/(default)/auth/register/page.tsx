"use client"
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import Input from '@/components/Input';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type FormValues = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

type ValidationErrors = {
  usernameError?: string;
  emailError?: string;
  passwordError?: string;
  repeatPasswordError?: string;
}

const Register = (): JSX.Element => {

  const currentUser = useSession().data?.user

  const { push } = useRouter()

  const [form, setForm] = useState<FormValues>({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>): void => {
    setValidationErrors({});
    const { name, value } = e.target
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    const body = {
      username: form.username,
      email: form.email,
      password: form.password
    }
    try {
      const res = await fetch("http://localhost:8080/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + currentUser.accessToken
        },
        body: JSON.stringify(body)
      })

      if (res.ok) {
        push("/auth/login")
      }

      if (!res.ok) {
        const errorData = await res.json()
        if (errorData.validationErrors) {
          setValidationErrors({ ...errorData.validationErrors });
        }
      }
    } catch (error) {
      console.log(error); s

    }
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
      setValidationErrors({ repeatPasswordError: 'password mismatch' });
    }
  }, [repeatPassword, password]);


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
            error={usernameError ? true : false}
            variant="outlined"
            description="İsminizi giriniz"
          />
          <Input
            onChangeForm={handleChangeForm}
            name="email"
            value={email}
            error={emailError ? true : false}
            label="Email"
            required={true}
            variant="outlined"
            description="lutfen mail formatinda giriniz"
          />
          <Input
            onChangeForm={handleChangeForm}
            name="password"
            value={password}
            error={passwordError ? true : false}
            label="Password"
            inputType="password"
            required={true}
            variant="outlined"
            description="lutfen parolanizi dogru girinzi"
          />
          <Input
            onChangeForm={handleChangeForm}
            value={repeatPassword}
            error={repeatPasswordError ? true : false}
            errorMessage={repeatPasswordError}
            name="repeatPassword"
            label="Repeat Password"
            inputType="password"
            required={true}
            variant="outlined"
            description="yukaridaki parola kismi ile ayni olmali"
          />

          <div className="mt-5">
            <button
              onClick={(e: React.FormEvent<HTMLButtonElement>) => handleSubmit(e)}
              className="bg-black w-full xl:text-base  text-sm text-white py-2 px-4 rounded-full hover:bg-green-700 transition ease-in cursor-pointer"
            >
              SIGN UP
            </button>
          </div>

          <div className="flex justify-center mb-2">
            <p className="xl:text-base text-sm">
              Already have an account?
              <Link href="/login">
                <span className="xl:text-base  text-sm cursor-pointer text-blue-500 hover:underline transition ease-in duration-150">
                  Sign In
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Register;
