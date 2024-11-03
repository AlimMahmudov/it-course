import scss from "./Process.module.scss";
import { FaCheck } from "react-icons/fa6";

const Process = () => {
  return (
    <div id={scss.Process}>
      <div className="container">
        <div className={scss.process}>
          <div className={scss.process_text}>
            <h1>Процесс обучения</h1>
            <p>
              Каждый из наших мастер-классов состоит из 2-8 уроков. Рекомендуем
              проходить мастер-класс последовательно, урок за уроком
            </p>
          </div>
          <div className={scss.process_block}>
            <div className={scss.process_box}>
              <div className={scss.process_card}>
                <h1>1</h1>
                <h2>Мастер-класс</h2>
                <h3>
                  Вы получите доступ ко всем урокам мастер-класса и другим
                  дополнительным материалам
                </h3>
              </div>
              <div className={scss.process_card}>
                <h1>2</h1>
                <h2>Своё расписание</h2>
                <h3>
                  Доступ к мастер-классам открыт 24/7. Вы сами решаете, когда у
                  вас следующий урок
                </h3>
              </div>
              <div className={scss.process_card}>
                <h1>3</h1>
                <h2>Сообщество</h2>
                <h3>
                  Вы сможете общаться и обмениваться мнениями с другими
                  учениками в комментариях
                </h3>
              </div>
              <div className={scss.process_card}>
                <h1>4</h1>
                <h2>Доступ</h2>
                <h3>
                  Мы предоставляем вам 6 неделный доступ к материалам
                  оплаченного мастер-класса
                </h3>
              </div>
            </div>
            <div className={scss.process_box2}>
              <h2>
                Мастер-класс “Реактивное программирование на Java : как, зачем и
                стоит ли? Часть 1”
              </h2>
              <h1>46,00 $</h1>
              <p>Доступ к мастер классу навсегда</p>
              <p>Доступны все 5 уроков</p>
              <p>Дополнительные материалы</p>
              <button>Купить мастер-класс </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
