import React from "react";
import scss from "./School.module.scss";
import Image from "next/image";
import man from "@/assets2/web_development_banner_1-removebg-preview.png";
import php from "@/assets2/php.svg";
import php2 from "@/assets2/cpp.svg";
import php3 from "@/assets2/search.svg";
import php4 from "@/assets2/box.svg";
import php5 from "@/assets2/box2.svg";
import css from "@/assets2/css.svg";
import css2 from "@/assets2/play.svg";
import css3 from "@/assets2/seting.svg";

const School = () => {
  return (
    <div id={scss.School}>
      <div className="container">
        <div className={scss.school}>
          <div className={scss.school_text}>
            <h1>О нашей школе:</h1>
            <p>
              Наша платформа — это интенсивная программа обучения для тех, кто
              хочет освоить востребованную профессию, войти в IT и зарабатывать
              больше.
            </p>

            <h1>Наша миссия:</h1>
            <p>
              Сформировать интерес к современным технологиям и помочь школьнику
              определиться с выбором будущей специальности.
            </p>
          </div>
          <div className={scss.school_img}>
            <div className={scss.box}>
              <Image className={scss.php1} src={php} alt="" />
              <Image className={scss.php2} src={php2} alt="" />
              <Image className={scss.php3} src={php3} alt="" />
              <Image className={scss.php4} src={php4} alt="" />
              <Image className={scss.php5} src={php5} alt="" />
            </div>
            <div className={scss.block}>
              <Image className={scss.nam} src={man} alt="" />
              <div className={scss.box2}>
                <Image className={scss.css1} src={css} alt="" />
                <Image className={scss.css2} src={css2} alt="" />
                <Image className={scss.css3} src={css3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
