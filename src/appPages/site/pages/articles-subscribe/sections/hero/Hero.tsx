"use client";
import React from "react";
import scss from "./Hero.module.scss";
import { useLanguageStore } from "@/shared/stores/Language";
import Image from "next/image";
import heroImg from "@/shared/assets/article-hero-img.png";
const Hero = () => {
  const { translate } = useLanguageStore();
  return (
    <section className={scss.Hero}>
      <div className={scss.content}>
        <h1>
          {translate(
            "Биз IBS окуу борборунда эң популярдуу Java курстарынын тандоосун даярдадык.",
            "Мы подготовили подборку самых популярных курсов  по направлению Java в IBS Training Center."
          )}
        </h1>
        <p>
          Когда-то ни один крупный проект не обходился без применения
          функционального и асинхронного программирования. Эти подходы до сих
          пор популярны за счет своих преимуществ: они помогают выдерживать
          большие нагрузки и писать эффективный код, не теряя в скорости
          разработки.{" "}
        </p>
        <div className={scss.Hero__image}>
          <Image src={heroImg} alt="" />
        </div>
        <h3>
          {translate(
            "IBS окуу борборунун курсунун бир бөлүгү катары, сиз Spring Framework 5тин негизги өзгөчөлүктөрү кандайча иштээрин түшүнүп, үйрөнөсүз:",
            "В рамках курса от IBS Training Center вы поймете, как работают основные фичи Spring Framework 5, и узнаете:"
          )}
        </h3>
        <ul>
          <li>
            {translate(
              "Spring Framework 5 үчүн кандай конфигурациялар бар;",
              "Какие существуют конфигурации для Spring Framework 5;"
            )}
          </li>
          <li>
            {translate(
              "Swagger аркылуу REST кызматтары жана документтери менен кантип иштөө керек.",
              "Как работать с REST-сервисами и документацией при помощи Swagger."
            )}
          </li>
          <li>
            {translate(
              "буурчак деген эмне жана алар менен кантип иштөө керек;",
              "Что такое бины и как с ними работать;."
            )}
          </li>
          <li>
            {translate(
              "IoC концепциясы деген эмне;",
              "Что такое Концепция IoC;"
            )}
          </li>
          <li>
            {translate(
              "AOP колдонуу мисалдары;",
              "Примеры использования AOP;."
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
