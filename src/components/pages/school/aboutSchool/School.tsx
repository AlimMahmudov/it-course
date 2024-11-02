"use client";
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
import { useLanguageStore } from "@/stores/Language";

const School = () => {
  const { translate } = useLanguageStore();

  return (
    <div id={scss.School}>
      <div className="container">
        <div className={scss.school}>
          <div className={scss.school_text}>
            <h1>{translate("Биздин мектеп тууралуу:", "О нашей школе:")}</h1>
            <p>
              {translate(
                "Биздин платформа — бул IT тармагына кирип, көбүрөөк акча тапкысы келгендер үчүн интенсивдүү окуу программасы.",
                "Наша платформа — это интенсивная программа обучения для тех, кто хочет освоить востребованную профессию, войти в IT и зарабатывать больше."
              )}
            </p>

            <h1>{translate("Биздин миссиябыз:", "Наша миссия:")}</h1>
            <p>
              {translate(
                "Заманбап технологияларга кызыгууну калыптандыруу жана окуучуларга келечектеги кесипти тандоого жардам берүү.",
                "Сформировать интерес к современным технологиям и помочь школьнику определиться с выбором будущей специальности."
              )}
            </p>
          </div>
          <div className={scss.school_img}>
            <div className={scss.box}>
              <Image className={scss.php1} src={php} alt="PHP Icon" />
              <Image className={scss.php2} src={php2} alt="C++ Icon" />
              <Image className={scss.php3} src={php3} alt="Search Icon" />
              <Image className={scss.php4} src={php4} alt="Box Icon" />
              <Image className={scss.php5} src={php5} alt="Box Icon 2" />
            </div>
            <div className={scss.block}>
              <Image className={scss.nam} src={man} alt="Man with laptop" />
              <div className={scss.box2}>
                <Image className={scss.css1} src={css} alt="CSS Icon" />
                <Image className={scss.css2} src={css2} alt="Play Icon" />
                <Image className={scss.css3} src={css3} alt="Settings Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
