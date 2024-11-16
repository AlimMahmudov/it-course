"use client";
import React from "react";
import scss from "./Hero.module.scss";
import Image from "next/image";
import { useGetMeQuery } from '@/shared/redux/api/user'
const Hero: React.FC<Iprops> = ({ article }) => {
  const { status } = useGetMeQuery();
  return (
    <section className={scss.Hero}>
      <div className={scss.content}>
        <h1>{article.article_content.title}</h1>
        <p>{article.article_content.description}</p>
        <div className={scss.Hero__image}>
          <Image src={article.article_content.image} alt="" />
        </div>
        <h3>{article.article_content.article_subtitle}</h3>
        <ul>
          {article.article_content.faq.map((fac, i) => {
            return <li key={i}>{fac}</li>;
          })}
        </ul>
        {status === "fulfilled" && article.isSubscribe && (
          <>
            <div>
              <p>{article.article_content.description_after_subscribe.first}</p>
              <p>
                {article.article_content.description_after_subscribe.second}
              </p>
              <p>{article.article_content.description_after_subscribe.third}</p>
              <p>{article.article_content.description_after_subscribe.four}</p>
            </div>
            <ul>
              {article.article_content.fuck_after_subscribe.map(
                (article, i) => {
                  return <li key={i}>{article}</li>;
                }
              )}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
