"use client";
import { useState } from "react";
import styles from "./SignUp.module.scss";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";

interface IInputComponentProps {
  email: string;
  password: string;
  username: string;
  photo: string;
}

const SignIn = () => {
  const [accepted, setAccepted] = useState(false);
  const { register, handleSubmit, reset } = useForm<IInputComponentProps>();

  const onSubmit: SubmitHandler<IInputComponentProps> = async (data) => {
    try {
      const { data: responseData } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/auth/sign-up`,
        data
      );
      console.log(responseData);
      reset();
      alert("Пользователь успешно зарегистрирован");
    } catch (e) {
      const error = e as AxiosError;
      console.log(error.response?.data);
    }
  };

  return (
    <>
      <header id={styles.Header}>
        <div className="container">
          <div className={styles.Header}>
            <Link href={"/auth/signin"}>Sign in</Link>
          </div>
        </div>
        <hr />
      </header>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h1>Registration</h1>

          <small>This email will be used as your login</small>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            {...register("password", { required: true })}
          />
          <input
            type="text"
            placeholder="Username"
            className={styles.input}
            {...register("username", { required: true })}
          />
          <input
            type="text"
            placeholder="User Photo URL"
            className={styles.input}
            {...register("photo", { required: true })}
          />
          <small>Password will be sent to this email</small>

          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="accept"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
            />
            <label htmlFor="accept">
              I accept the{" "}
              <a href="/terms" target="_blank">
                terms of the user agreement
              </a>{" "}
              and{" "}
              <a href="/privacy" target="_blank">
                agree to Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={!accepted}
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
