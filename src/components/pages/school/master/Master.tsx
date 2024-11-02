"use client";
import React from "react";
import scss from "./Master.module.scss";
import { useLanguageStore } from "@/stores/Language";

const asim = [
  {
    title:
      "Реактивдүү программалоо Javaда: кантип, эмне үчүн жана ага арзыйбы?",
    dics: "Программалоо салыштырмалуу жаңы пайда болду, болжол менен 10 жыл мурун. Бул салыштырмалуу жаңы ыкманын популярдуулугун эмне жаратты жана азыр эмне үчүн ал трендде экенин РИТ++ конференциясында айтып берди...",
  },
];

const Master = () => {
  const { translate } = useLanguageStore();

  return (
    <div id={scss.Master}>
      <div className="container">
        <div className={scss.master}>
          <div className={scss.master_text}>
            <h1>{translate("Мастер-класстары", "Мастер-классы")}</h1>
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
            <button>
              {translate("Бардык мастер-класстар", "Все мастер классы")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;
