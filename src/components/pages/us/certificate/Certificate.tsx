"use client";
import React from "react";
import scss from "./Certificate.module.scss";
import Image from "next/image";
import certi from "@/assets/Certificate.svg";
import { useLanguageStore } from "@/stores/Language";

const Certificate = () => {
  const { translate } = useLanguageStore();

  return (
    <div id={scss.Certificate}>
      <div className="container">
        <div className={scss.certificate}>
          <h1>{translate("Сертификат", "Сертификат")}</h1>
          <p>
            {translate(
              "По окончании обучения выдается онлайн сертификат.",
              "По окончании обучения выдается онлайн сертификат."
            )}
          </p>
          <Image src={certi} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
