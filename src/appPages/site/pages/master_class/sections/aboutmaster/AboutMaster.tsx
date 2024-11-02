import React from "react";
import scss from "./AboutMaster.module.scss";

const AboutMaster = () => {
  return (
    <div id={scss.AboutMaster}>
      <div className="container">
        <div className={scss.aboutmaster}>
          <div className={scss.aboutmaster_text}>
            <p>Что, как и почему</p>
            <h1>О МАСТЕР-КЛАССЕ</h1>
          </div>
          <div className={scss.aboutmaster_block}>
            <div className={scss.aboutmaster_box}>
              <p>
                В режиме мастер-класса он продемонстрировал, почему так важен
                неблокирующий ввод-вывод, в чем минусы классической
                многопоточности, в каких ситуациях нужна реактивность, и что она
                может дать. А еще описал недостатки реактивного подхода.
              </p>
              <h2>Переходите к видеоурокам, что бы научится: </h2>
              <li>
                <ul>Чтению файла (blocked on reading file);</ul>
                <ul>
                  Что бы научиться базе данных (blocked on reading from DB);
                </ul>
                <ul>
                  Научится использовать в сложных вычислениях (blocked on heavy
                  calculations);
                </ul>
                <ul>
                  На ответе от клиента (blocked on responding the client).
                </ul>
              </li>
              <div className={scss.buttons}>
                <button>Купить мастер-класс</button>
                <button>Смотреть программу</button>
              </div>
            </div>
            <div className={scss.aboutmaster_box2}>
              <div className={scss.d}>
                <p>Доступ:</p>
                <h2>6 недель</h2>
              </div>
              <div className={scss.m}>
                <p>В мастер-класс входит:</p>
                <h2>5 уроков</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMaster;
