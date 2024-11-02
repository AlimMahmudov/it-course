import React from "react";
import scss from "./Teacher.module.scss";
import Image from "next/image";
import teacher from "@/shared/assets/Rectangle 2196.svg";

const Teacher = () => {
  return (
    <div id={scss.Teacher}>
      <div className="container">
        <div className={scss.teacher}>
          <Image src={teacher} alt="" />
          <p>Мастер класс ведет</p>
          <h1>Евгений Александрович</h1>
          <p> Frontend developer / Аратор </p>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
