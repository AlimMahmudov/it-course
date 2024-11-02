"use client";
import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import scss from "./Telegram.module.scss";
import { useLanguageStore } from "@/stores/Language";

interface IFormTelegram {
  name: string;
  email: string;
  number: number;
}

const Telegram = () => {
  const { register, handleSubmit, reset } = useForm<IFormTelegram>();
  const { translate } = useLanguageStore();

  const messageModel = (data: IFormTelegram) => {
    let messageTG = `Name: <b>${data.name}</b>\n`;
    messageTG += `Email Address: <b>${data.email}</b>\n`;
    messageTG += `Number: <b>${data.number}</b>\n`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    await axios.post(
      `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TG_TOKEN}/sendMessage`,
      {
        chat_id: process.env.NEXT_PUBLIC_TG_CHAT_ID,
        parse_mode: "html",
        text: messageModel(data),
      }
    );
    reset();
  };

  return (
    <div id={scss.Telegram}>
      <div className="container">
        <div className={scss.telegram}>
          <div className={scss.telegram_text}>
            <h1>{translate("Билдирүү калтыруу", "Оставить заявку")}</h1>
            <p>
              {translate(
                "Негизги суроолору бар кыска форма толтуруп, сиз менен сүйлөшүүгө даярданабыз",
                "Заполните краткую форму с ключевым вопросами, и мы подготовимся к разговору с вами"
              )}
            </p>
          </div>
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={scss.inputs}>
              <p>{translate("ФИО", "ФИО")}</p>
              <input type="text" {...register("name", { required: true })} />
            </div>

            <div className={scss.inputs}>
              <p>{translate("Телефон номери", "Номер телефона")}</p>
              <input
                type="number"
                {...register("number", { required: true })}
              />
            </div>

            <div className={scss.inputs}>
              <p>Email</p>
              <input type="email" {...register("email", { required: true })} />
            </div>

            <button className={scss.SuButton} type="submit">
              {translate("Жөнөтүү", "Отправить")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Telegram;