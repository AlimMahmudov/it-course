"use client";
import React from "react";
import scss from "./Home.module.scss";
import Image from "next/image";
import men from "@/assets/men 1.svg";
import men_box from "@/assets/men_box.svg";
import men_box2 from "@/assets/men_box2.svg";
import men_box3 from "@/assets/men_box3.svg";
import men_box4 from "@/assets/men_box4.svg";
import { useLanguageStore } from "@/stores/Language";

const Home = () => {
  const { translate } = useLanguageStore();

  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <div className={scss.home_text}>
            <h1>
              {translate(
                "IT билим берүү платформасы",
                "IT образовательная платформа"
              )}
            </h1>
            <p>
              {translate(
                "Биздин билим берүү платформабыз IT тармагына адаптациялоо үчүн керектүү практикалык билимдерди берет.",
                "Наша образовательная платформа вам даст необходимые практические знания для адаптации в IT-сфере."
              )}
            </p>
          </div>
          <div className={scss.home_img}>
            <Image className={scss.box} src={men_box} alt="" />
            <div className={scss.home_men}>
              <Image className={scss.box2} src={men_box2} alt="" />
              <Image className={scss.men} src={men} alt="" />
              <Image className={scss.box3} src={men_box3} alt="" />
            </div>
            <Image className={scss.box4} src={men_box4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
