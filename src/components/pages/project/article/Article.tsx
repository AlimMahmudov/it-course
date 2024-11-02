"use client";
import React from "react";
import scss from "./Article.module.scss";
import Image from "next/image";
import card from "@/assets/card.svg";
import { useLanguageStore } from "@/stores/Language";

const Article = () => {
  const { translate } = useLanguageStore();

  return (
    <div id={scss.Article}>
      <div className="container">
        <div className={scss.article}>
          <div className={scss.article_text}>
            <h1>{translate("Акыркы макалалар", "Последние статьи")}</h1>
          </div>
          <div className={scss.article_block}>
            {[...Array(6)].map((_, index) => (
              <div key={index} className={scss.article_box}>
                <Image src={card} alt="" />
                <div className={scss.article_box_text}>
                  <p>{translate("Макалалар", "Статьи")}</p>
                  <h2>
                    {translate(
                      "Биз Java багыты боюнча эң популярдуу курстарды IBS Training Centerде даярдадык.",
                      "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center."
                    )}
                  </h2>
                  <div className={scss.article_data}>
                    <p>{translate("Окуу", "Читать")}</p>
                    <p>01.02.2022</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={scss.article_button}>
            <button>{translate("Көбүрөөк көрсөтүү", "Показать больше")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
