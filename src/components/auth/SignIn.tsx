"use client";
import React from "react";
import scss from "./SignIn.module.scss";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { usePostUserSigninMutation } from "@/redux/api/auth";
import logo from "@/assets/logo.svg";
import Image from "next/image";

interface SigninType {
  email: string;
  password: string;
}

const SignIn = () => {
  const route = useRouter();
  const { register, handleSubmit } = useForm<SigninType>();
  const [postUserSigninMutation] = usePostUserSigninMutation();
  const onSubmit: SubmitHandler<SigninType> = async (data) => {
    try {
      const { data: responseData } = await postUserSigninMutation(data);
      localStorage.setItem("user", JSON.stringify(responseData.accessToken));
    } catch (e) {
      const error = e as AxiosError;
      console.log(error.response?.data);
    }
  };

  return (
    <div id={scss.SignIn}>
      <div className="container">
        <div className={scss.signin}>
          <div className={scss.signin_logo}>
            <Image src={logo} alt="" />
          </div>
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={scss.for_inp}>
              <p>Email</p>
              <input {...register("email", { required: true })} type="text" />
            </div>
            <div className={scss.for_inp}>
              <p>пароль</p>
              <input
                {...register("password", { required: true })}
                type="text"
              />
            </div>
            <div className={scss.buttons}>
              <button className={scss.sign_btn} type="submit">
                add
              </button>
              <button
                className={scss.sign_btn2}
                onClick={() => route.push("/auth/signup")}
              >
                забыли пароль
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
