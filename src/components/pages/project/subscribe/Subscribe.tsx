import React from "react";
import scss from "./Subscribe.module.scss";
import Link from "next/link";

const Subscribe = () => {
  return (
    <div id={scss.Subscribe}>
      <div className="container">
        <div className={scss.subscribe}>
          <div className={scss.subscribe_text}>
            <h2>Подпишитесь сейчас за 19,00 $ / мес</h2>
            <p>
              И получите доступ к материалам и кейсам, а также к новым
              мастер-классам
            </p>
          </div>
          <div className={scss.subscribe_buttons}>
            <button>Оформить подписку</button>
            <Link href="">Подробнее о пакетах </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
