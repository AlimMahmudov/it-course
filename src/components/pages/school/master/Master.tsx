import React from "react";
import scss from "./Master.module.scss";

const asim = [
  {
    title: " Реактивное программирование на Java: как, зачем и стоит ли?",
    dics: " Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого относительно нового подхода ипочему сейчас он в тренде, рассказал на конференции РИТ++ ...",
  },
];

const Master = () => {
  return (
    <div id={scss.Master}>
      <div className="container">
        <div className={scss.master}>
          <div className={scss.master_text}>
            <h1>Мастер-классы</h1>
          </div>
          <div className={scss.master_block}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className={scss.master_box}>
                <div className={scss.asim_box}>
                  <h1>{asim[0].title}</h1>
                  <p>{asim[0].dics}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={scss.master_button}>
            <button>Все мастер классы</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;
