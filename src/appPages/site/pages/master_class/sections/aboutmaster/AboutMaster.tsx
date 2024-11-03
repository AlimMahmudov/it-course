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
              <ul>
                <li>Чтению файла (blocked on reading file);</li>
                <li>
                  Что бы научиться базе данных (blocked on reading from DB);
                </li>
                <li>
                  Научится использовать в сложных вычислениях (blocked on heavy
                  calculations);
                </li>
                <li>
                  На ответе от клиента (blocked on responding the client).
                </li>
              </ul>
              <div className={scss.buttons}>
                <button>Купить мастер-класс</button>
                <button>Смотреть программу</button>
              </div>
            </div>
            <div className={scss.aboutmaster_box2}>
              <div className={scss.d}>
                <h3>Доступ:</h3>
                <h2>6 недель</h2>
              </div>
              <div className={scss.m}>
                <h3>В мастер-класс входит:</h3>
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
