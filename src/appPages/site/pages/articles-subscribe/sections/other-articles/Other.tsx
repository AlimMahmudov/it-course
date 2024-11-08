"use client";
import React from "react";
import scss from "./Other.module.scss";
import { useLanguageStore } from "@/shared/stores/Language";
import readIcon from "@/shared/assets/articles-read-icon.svg";
import Link from "next/link";
import Image from "next/image";
const Other = () => {
  const { translate } = useLanguageStore();
  return (
    <section className={scss.Other}>
      <h1>{translate("Башка макалалар", "Другие статьи ")}</h1>
      <div className={scss.content}>
        {[...Array(3)].map((_, i) => (
          <div className={scss.items} key={i}>
            <h3>{translate("Макалалар", "Статьи")}</h3>
            <p>
              {translate(
                "Биз IBS окуу борборунда эң популярдуу Java курстарынын тандоосун даярдадык.",
                "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. "
              )}
            </p>
            <div className={scss.Other__items__bottom}>
              <Link href={""}>
                <Image src={readIcon} alt="Read-icon" />
                <span>{translate("Окуу", "Читать")}</span>
              </Link>
              <p>21.09.2022</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Other;
