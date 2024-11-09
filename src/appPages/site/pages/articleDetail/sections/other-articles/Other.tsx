"use client";
import React from "react";
import scss from "./Other.module.scss";
import { useLanguageStore } from "@/shared/stores/Language";
import readIcon from "@/shared/assets/articles-read-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/shared/const/articles";
const Other = () => {
  const { translate } = useLanguageStore();
  return (
    <section className={scss.Other}>
      <h1>{translate("Башка макалалар", "Другие статьи ")}</h1>
      <div className={scss.content}>
        {articles.slice(0, 3).map((article, i) => (
          <div className={scss.items} key={i}>
            <h3>{translate("Макалалар", "Статьи")}</h3>
            <p>{article.mainArticles.description}</p>
            <div className={scss.Other__items__bottom}>
              <Link href={`/article/${article.id}`}>
                <Image src={readIcon} alt="Read-icon" />
                <span>{translate("Окуу", "Читать")}</span>
              </Link>
              <p>{article.mainArticles.data}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Other;
