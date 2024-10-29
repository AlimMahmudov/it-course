import React from "react";
import scss from "./Pack.module.scss";

const Pack = () => {
  return (
    <div id={scss.Pack}>
      <div className="container">
        <div className={scss.pack}>
          <div className={scss.pack_text}>
            <h1>Уровень пакетов</h1>
            <p>
              Списания будут автоматическими. Вы всегда можете отменить подписку
              в Вашем личном кабинете и больше списаний не будет
            </p>
          </div>
          <div className={scss.pack_block}>
            <div className={scss.pack_box}>
              <div className={scss.box1}>
                <h2>Месяц +</h2>
                <p>Доступны: Все статьи</p>
              </div>
              <div className={scss.box2}>
                <h1>105,00 $</h1>
                <p>Ежемесячно</p>
              </div>
              <div className={scss.pack_buttons}>
                <button className={scss.btn1}>Оформить подписку</button>
                <button className={scss.btn2}>Подробнее</button>
              </div>
            </div>

            <div className={scss.pack_box}>
              <div className={scss.box1}>
                <h2>Месяц +</h2>
                <p>Доступны: Все статьи</p>
              </div>
              <div className={scss.box2}>
                <h1>105,00 $</h1>
                <p>Ежемесячно</p>
              </div>
              <div className={scss.pack_buttons}>
                <button className={scss.btn1}>Оформить подписку</button>
                <button className={scss.btn2}>Подробнее</button>
              </div>
            </div>

            <div className={scss.pack_box}>
              <div className={scss.box1}>
                <h2>Месяц +</h2>
                <p>Доступны: Все статьи</p>
              </div>
              <div className={scss.box2}>
                <h1>105,00 $</h1>
                <p>Ежемесячно</p>
              </div>
              <div className={scss.pack_buttons}>
                <button className={scss.btn1}>Оформить подписку</button>
                <button className={scss.btn2}>Подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pack;
