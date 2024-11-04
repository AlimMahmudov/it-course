import scss from "./Subscribe.module.scss";

const Subscribe = () => {
  return (
    <div id={scss.Subscribe}>
      <div className="container">
        <div className={scss.subscribe}>
          <div className={scss.p}>
            <p>
              <span>Главная / </span> Пакет участия
            </p>
            <h1>Выберите свой пакет участия</h1>
          </div>

          <div className={scss.block}>
            <div className={scss.box}>
              <div className={scss.box_text}>
                <h3>Месяц +</h3>
                <h1>105,00 $</h1>
                <button>Ежемесячно</button>
                <h4>Все статьи</h4>
              </div>
              <button className={scss.btn}>Оформить подписку</button>
            </div>
            <div className={scss.box}>
              <div className={scss.box_text}>
                <h3>Год </h3>
                <h1>220,00 $</h1>
                <button>Ежегодно</button>
                <h4>Все статьи</h4>
                <h4>Все мастер классы</h4>
              </div>
              <button className={scss.btn}>Оформить подписку</button>
            </div>
            <div className={scss.box}>
              <div className={scss.box_text}>
                <h3>Год +</h3>
                <h1>585,00 $</h1>
                <button>Ежегодно</button>
                <h4>Все статьи</h4>
                <h4>Все мастер классы</h4>
                <h4>6 новых статей каждый месяц</h4>
                <h4>Доступ к курсу “DevOps - инженер”</h4>
              </div>
              <button className={scss.btn}>Оформить подписку</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
