"use client";

import scss from "./Part.module.scss";

const Part = () => {
  return (
    <div id={scss.Part}>
      <div className="container">
        <div className={scss.part}>
          <div className={scss.part_text}>
            <p>
              <span>Главная / Мастер классы /</span> Реактивное программирование
              на Java
            </p>
          </div>
          <div className={scss.part_block}>
            <div className={scss.box}>
              <h1>
                Реактивное программирование на Java : как, зачем и стоит ли?
                Часть 1
              </h1>
              <h2>
                Идея реактивного программирования появилась сравнительно
                недавно, лет 10 назад. Что вызвало популярность этого
                относительно нового подхода и почему сейчас он в тренде,
                рассказал на конференции
              </h2>
              <button>Купить мастер-класс за 46 $</button>
            </div>
            <div className={scss.aboutmaster_box2}>
              <div className={scss.d}>
                <h3>Доступ:</h3>
                <h4>6 недель</h4>
              </div>
              <div className={scss.m}>
                <h3>В мастер-класс входит:</h3>
                <h4>5 уроков</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part;
