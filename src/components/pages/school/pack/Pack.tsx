"use client";
import React from "react";
import scss from "./Pack.module.scss";
import { useLanguageStore } from "@/stores/Language";

const Pack = () => {
  const { translate } = useLanguageStore();

  return (
    <div id={scss.Pack}>
      <div className="container">
        <div className={scss.pack}>
          <div className={scss.pack_text}>
            <h1>{translate("Пакет деңгээлдери", "Уровень пакетов")}</h1>
            <p>
              {translate(
                "Чегеримдер автоматтык түрдө жүргүзүлөт. Сиз ар дайым өздүк кабинеттен жазылууну токтотуп, дагы чегеримдер болбойт.",
                "Списания будут автоматическими. Вы всегда можете отменить подписку в Вашем личном кабинете и больше списаний не будет"
              )}
            </p>
          </div>
          <div className={scss.pack_block}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className={scss.pack_box}>
                <div className={scss.box1}>
                  <h2>{translate("Ай +", "Месяц +")}</h2>
                  <p>
                    {translate(
                      "Доступтуу: Бардык макалалар",
                      "Доступны: Все статьи"
                    )}
                  </p>
                </div>
                <div className={scss.box2}>
                  <h1>105,00 $</h1>
                  <p>{translate("Ай сайын", "Ежемесячно")}</p>
                </div>
                <div className={scss.pack_buttons}>
                  <button className={scss.btn1}>
                    {translate("Жазылууну рәсмилештирүү", "Оформить подписку")}
                  </button>
                  <button className={scss.btn2}>
                    {translate("Көбүрөөк маалымат", "Подробнее")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pack;
