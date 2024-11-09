"use client";
import React from "react";
import scss from "./Comments.module.scss";
import { useLanguageStore } from "@/shared/stores/Language";
import Image from "next/image";
import lock from "@/shared/assets/subscribe-lock.svg";
import userProfile from "@/shared/assets/article-user-profile.svg";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { articleComments } from "@/shared/const/article-comments";
import { useGetUserAuthQuery } from "@/shared/redux/api/auth";
interface Iform {
  userComment: string;
}
const Comments = () => {
  const { status } = useGetUserAuthQuery();
  const isLogged = status === "fulfilled";
  const today = new Date();
  const { translate } = useLanguageStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<Iform>();
  const onSubmit: SubmitHandler<Iform> = async (data) => {
    console.log(data);
    reset();
  };
  function formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
  return (
    <section className={scss.Comments}>
      {!isLogged && (
        <div className={scss.Subscribe__content}>
          <div className={scss.Subscribe__left}>
            <Image src={lock} alt="lock" />
            <div className={scss.Subscribe__left__content}>
              <h3>
                {translate(
                  "Толук версиясын көрүү үчүн жазылыңыз",
                  "Оформите подписку, чтобы посмотреть полную версию"
                )}
              </h3>
              <p>
                {translate(
                  "Сиз буга чейин эле киргенсизби?",
                  "Вы уже авторизованы?"
                )}
                <Link href="/auth/signin">
                  {translate("Кириңиз", "Авторизуйтесь")}
                </Link>
              </p>
            </div>
          </div>
          <div className={scss.Subscribe__right}>
            <button>Получить доступ за 225,00$</button>
          </div>
        </div>
      )}
      <h2>{translate("Коментарийлер", "Комментарии")}</h2>
      {!isLogged && (
        <div className={scss.Subscribe__content}>
          <div className={scss.Subscribe__left}>
            <Image src={userProfile} alt="lock" />
            <div className={scss.Subscribe__left__content}>
              <h3>
                {translate(
                  "Сиз катталган жоксуз!",
                  "Вы не зарегистрировались!"
                )}
              </h3>
              <p>
                {translate(
                  "Комментарий калтыруу үчүн, кириңиз же катталыңыз.",
                  "Чтобы оставить комментарий, пожалуйста авторизуйтесь или зарегитрируйтесь."
                )}
              </p>
            </div>
          </div>
          <div className={scss.Subscribe__right}>
            <Link href="/auth/signin">
              <button>{translate("Каттоо", "Зарегистрироваться")}</button>
            </Link>
          </div>
        </div>
      )}
      {isLogged && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              {...register("userComment", { required: true })}
              placeholder={translate("Сиздин комментарий", "Ваш комментарий")}
            ></textarea>
            <button type="submit">
              {translate("Жөнөтүү", isSubmitting ? "Отправка..." : "Отправить")}
            </button>
          </form>
          <div className={scss.user__comments}>
            {articleComments.map((comment) => (
              <div key={comment.id} className={scss.comments}>
                <Image src={comment.profile} alt="Profile" />
                <div>
                  <h3>
                    {comment.title}
                    <span>
                      <i>/</i>
                      {formatDate(today)}
                    </span>
                  </h3>
                  <p>{comment.description}</p>
                  <button>{translate("Жооп берүү", "Ответить")}</button>
                </div>
              </div>
            ))}
            <button className={scss.viewFull}>
              {translate("Баарын көрүү", "Смотреть все")}
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Comments;
