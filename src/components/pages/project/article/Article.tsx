import React from "react";
import scss from "./Article.module.scss";
import Image from "next/image";
import card from "@/assets/card.svg";

const Article = () => {
  return (
    <div id={scss.Article}>
      <div className="container">
        <div className={scss.article}>
          <div className={scss.article_text}>
            <h1>Последние статьи</h1>
          </div>
          <div className={scss.article_block}>
            <div className={scss.article_box}>
              <Image src={card} alt="" />
              <div className={scss.article_box_text}>
                <p>Статьи</p>
                <h2>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </h2>
                <div className={scss.article_data}>
                  <p>Читать</p>
                  <p>01.02.2022</p>
                </div>
              </div>
            </div>

            <div className={scss.article_box}>
              <Image src={card} alt="" />
              <div className={scss.article_box_text}>
                <p>Статьи</p>
                <h2>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </h2>
                <div className={scss.article_data}>
                  <p>Читать</p>
                  <p>01.02.2022</p>
                </div>
              </div>
            </div>

            <div className={scss.article_box}>
              <Image src={card} alt="" />
              <div className={scss.article_box_text}>
                <p>Статьи</p>
                <h2>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </h2>
                <div className={scss.article_data}>
                  <p>Читать</p>
                  <p>01.02.2022</p>
                </div>
              </div>
            </div>

            <div className={scss.article_box}>
              <Image src={card} alt="" />
              <div className={scss.article_box_text}>
                <p>Статьи</p>
                <h2>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </h2>
                <div className={scss.article_data}>
                  <p>Читать</p>
                  <p>01.02.2022</p>
                </div>
              </div>
            </div>

            <div className={scss.article_box}>
              <Image src={card} alt="" />
              <div className={scss.article_box_text}>
                <p>Статьи</p>
                <h2>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </h2>
                <div className={scss.article_data}>
                  <p>Читать</p>
                  <p>01.02.2022</p>
                </div>
              </div>
            </div>

            <div className={scss.article_box}>
              <Image src={card} alt="" />
              <div className={scss.article_box_text}>
                <p>Статьи</p>
                <h2>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </h2>
                <div className={scss.article_data}>
                  <p>Читать</p>
                  <p>01.02.2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className={scss.article_button}>
            <button>Показать больше</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
