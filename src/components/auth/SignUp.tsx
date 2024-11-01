"use client";
import scss from "./SignUp.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { useRouter } from "next/navigation";

interface IInputComponentProps {
  username: string;
  tel: string;
  email: string;
  password: string;
  photo: string;
  day: number;
  month: string;
  year: number;
  country: string;
  sity: string;
  Occupat: string;
  man: string;
  woman: string;
}

const SignIn = () => {
  const route = useRouter();
  const { register, handleSubmit, reset } = useForm<IInputComponentProps>();

  const onSubmit: SubmitHandler<IInputComponentProps> = async (data) => {
    try {
      const { data: responseData } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/auth/sign-up`,
        data
      );
      console.log(responseData);
      reset();
      alert("Пользователь успешно за регицтраван");
    } catch (e) {
      const error = e as AxiosError;
      console.log(error.response?.data);
    }
  };

  return (
    <div id={scss.SignUp}>
      <div className="container">
        <div className={scss.signup}>
          <div className={scss.signup_logo}>
            <Image src={logo} alt="" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
            {/* <input type="text" {...register("username", { required: true })} />
            <input type="text" {...register("tel", { required: true })} /> */}
            <input type="text" {...register("email", { required: true })} />
            <input type="text" {...register("password", { required: true })} />
            {/* <input type="text" {...register("photo", { required: true })} />
            <input type="text" {...register("day", { required: true })} />
            <input type="text" {...register("month", { required: true })} />
            <input type="text" {...register("year", { required: true })} />
            <input type="text" {...register("country", { required: true })} />
            <input type="text" {...register("sity", { required: true })} />
            <input type="text" {...register("Occupat", { required: true })} />
            <input type="text" {...register("man", { required: true })} />
            <input type="text" {...register("woman", { required: true })} /> */}
            <button type="submit">create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
