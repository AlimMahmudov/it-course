"use client";
import React from "react";
import scss from "./Review.module.scss";
import Image from "next/image";
import cardman from "@/assets2/cardman.svg";
import { useLanguageStore } from "@/stores/Language";

const Review = () => {
  const { translate } = useLanguageStore();

  return (
    <div id={scss.Review}>
      <div className="container">
        <div className={scss.review}>
          <div className={scss.review_text}>
            <h1>
              {translate(
                "Биздин мектеп тууралуу пикирлер",
                "Отзывы о нашей школе"
              )}
            </h1>
          </div>
          <div className={scss.review_block}>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className={scss.review_box}>
                <Image src={cardman} alt="" />
                <div className={scss.review_boxt_text}>
                  <h1>
                    {translate(
                      "Виктор Александарович",
                      "Виктор Александарович"
                    )}
                  </h1>
                  <h3>
                    {translate(
                      'С кубаныч менен оң пикир калтырам! "UX/UI Designer с нуля" курсун өтүп, мен толугу менен канааттандым, анткени менин тандоом ушул мектепке түштү. Эгер сиз бул мектепти тандасаңыз, сиздин тандалган чөйрөдө өнүгүшүңүз камсыздалат. Ар тараптан сунуштайм жана ыраазычылык билдирем!',
                      'С радостью оставляю положительный отзыв! Пройдя курс "UX/UI Designer с нуля" я остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!'
                    )}
                  </h3>
                </div>
                <div className={scss.review_data}>
                  <h2>23.02.2022</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
