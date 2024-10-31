"use client";
import React from "react";
import scss from "./SignIn.module.scss";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { usePostUserSigninMutation } from "@/redux/api/auth";

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
          <div className={scss.signin_inputs}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("email", { required: true })} type="text" />
              <input
                {...register("password", { required: true })}
                type="text"
              />
              <button type="submit">add</button>
              <button onClick={() => route.push("/auth/signup")}>
                забыли пароль
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
