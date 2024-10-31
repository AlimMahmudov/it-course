import React from "react";
import scss from "./AboutUs.module.scss";
import us1 from "@/assets/us.svg";
import us2 from "@/assets/us2.svg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div id={scss.AboutUs}>
      <div className="container">
        <div className={scss.aboutUs}>
          <div className={scss.aboutUs_text}>
            <h1>О нас</h1>
            <p>
              Курсы IT-профессий Motion Web была основана в 2021-ом году в
              Бишкеке с целью дать возможность каждому человеку, даже без опыта
              в технологиях, гарантированно освоить IT-профессию.
            </p>
            <p>
              Форма обучения - онлайн, с применением электронного обучения и
              дистанционных образовательных технологий на образовательной
              платформе Moodle и прямые эфиры с преподавателем. 154
              академических часа трудоёмкости учебной деятельности отведено
              практическим занятиям и выполнению практических заданий.
            </p>
          </div>
          <div className={scss.aboutUs_img}>
            <Image className={scss.asimimg} src={us1} alt="" />
            <Image className={scss.asimimg} src={us2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
