import React from "react";
import scss from "./Certificate.module.scss";
import Image from "next/image";
import certi from "@/assets/Certificate.svg";

const Certificate = () => {
  return (
    <div id={scss.Certificate}>
      <div className="container">
        <div className={scss.certificate}>
          <h1>Сертификат</h1>
          <p>По окончании обучения выдается онлайн сертификат.</p>
          <Image src={certi} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
