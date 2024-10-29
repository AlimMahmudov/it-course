import React from "react";
import scss from "./Review.module.scss";
import Image from "next/image";
import cardman from "@/assets2/cardman.svg";

const Review = () => {
  return (
    <div id={scss.Review}>
      <div className="container">
        <div className={scss.review}>
          <div className={scss.review_text}>
            <h1>Отзывы о нашей школе</h1>
          </div>
          <div className={scss.review_block}>
            <div className={scss.review_box}>
              <Image src={cardman} alt="" />
              <div className={scss.review_boxt_text}>
                <h1>Виктор Александарович</h1>
                <h3>
                  С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                  Designer с нуля" я с остался полностью доволен, что мой выбор
                  пал именно на данную школу. Если вы выберите данную школу -
                  вам обеспечена прокачка в выбранной вами области. Всячески
                  рекомендую и благодарю!
                </h3>
              </div>
              <div className={scss.review_data}>
                <h2>23.02.2022 г</h2>
              </div>
            </div>

            <div className={scss.review_box}>
              <Image src={cardman} alt="" />
              <div className={scss.review_boxt_text}>
                <h1>Виктор Александарович</h1>
                <h3>
                  С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                  Designer с нуля" я с остался полностью доволен, что мой выбор
                  пал именно на данную школу. Если вы выберите данную школу -
                  вам обеспечена прокачка в выбранной вами области. Всячески
                  рекомендую и благодарю!
                </h3>
              </div>
              <div className={scss.review_data}>
                <h2>23.02.2022 г</h2>
              </div>
            </div>

            <div className={scss.review_box}>
              <Image src={cardman} alt="" />
              <div className={scss.review_boxt_text}>
                <h1>Виктор Александарович</h1>
                <h3>
                  С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                  Designer с нуля" я с остался полностью доволен, что мой выбор
                  пал именно на данную школу. Если вы выберите данную школу -
                  вам обеспечена прокачка в выбранной вами области. Всячески
                  рекомендую и благодарю!
                </h3>
              </div>
              <div className={scss.review_data}>
                <h2>23.02.2022 г</h2>
              </div>
            </div>

            <div className={scss.review_box}>
              <Image src={cardman} alt="" />
              <div className={scss.review_boxt_text}>
                <h1>Виктор Александарович</h1>
                <h3>
                  С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                  Designer с нуля" я с остался полностью доволен, что мой выбор
                  пал именно на данную школу. Если вы выберите данную школу -
                  вам обеспечена прокачка в выбранной вами области. Всячески
                  рекомендую и благодарю!
                </h3>
              </div>
              <div className={scss.review_data}>
                <h2>23.02.2022 г</h2>
              </div>
            </div>

            <div className={scss.review_box}>
              <Image src={cardman} alt="" />
              <div className={scss.review_boxt_text}>
                <h1>Виктор Александарович</h1>
                <h3>
                  С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                  Designer с нуля" я с остался полностью доволен, что мой выбор
                  пал именно на данную школу. Если вы выберите данную школу -
                  вам обеспечена прокачка в выбранной вами области. Всячески
                  рекомендую и благодарю!
                </h3>
              </div>
              <div className={scss.review_data}>
                <h2>23.02.2022 г</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
