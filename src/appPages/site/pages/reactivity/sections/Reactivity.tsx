"use client";
import { useState } from "react";
import evgeny from "@/shared/assets/evgeny.svg";
import youtube from "@/shared/assets/youtube.svg";
import youtube2 from "@/shared/assets/youtube2.svg";
import youtube3 from "@/shared/assets/youtube3.svg";
import youtube4 from "@/shared/assets/youtube4.svg";
import scss from "./Reactivity.module.scss";
import Image from "next/image";

const Reactivity = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handlePrevClick = () => {
    setActiveTab((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveTab((prev) => (prev === 3 ? 0 : prev + 1));
  };

  return (
    <div id={scss.Reactivity}>
      <div className="container">
        <div className={scss.reactivity}>
          <div className={scss.react_block}>
            <div className={scss.react_box}>
              <h1>Reactivity</h1>
              <p>
                Когда нужно переходить от прокачивания личной эффективности к
                изучению эффективности командой?
              </p>
            </div>
            <div className={scss.react_box2}>
              <Image src={evgeny} alt="" />
              <h3>
                Евгений Александрович <br /> <span>Frontend developer</span>
              </h3>
            </div>
          </div>
          <div className={scss.youtube}>
            <div className={scss.youtube_box}>
              {activeTab === 0 && (
                <div>
                  <iframe
                    width="617"
                    height="387"
                    src="https://www.youtube.com/embed/tfn-59fbNMQ?list=PLDyJYA6aTY1lpbNh66kFpF62QpJyzliT2"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {activeTab === 1 && (
                <div>
                  <iframe
                    width="617"
                    height="387"
                    src="https://www.youtube.com/embed/7tx_DHs7ceM?list=PLDyJYA6aTY1lpbNh66kFpF62QpJyzliT2"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <iframe
                    width="617"
                    height="387"
                    src="https://www.youtube.com/embed/h8psMIltC1Q?list=PLDyJYA6aTY1lpbNh66kFpF62QpJyzliT2"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {activeTab === 3 && (
                <div>
                  <iframe
                    width="617"
                    height="387"
                    src="https://www.youtube.com/embed/tfn-59fbNMQ?list=PLDyJYA6aTY1lpbNh66kFpF62QpJyzliT2"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
            <div className={scss.youtube_box2}>
              <button
                className={`${scss.tabButton} ${
                  activeTab === 0 ? scss.activeButton : ""
                }`}
                onClick={() => handleTabClick(0)}
              >
                <Image src={youtube} alt="" />
                <h3>
                  1 Reactivity <br /> <span>Урок</span>
                </h3>
              </button>
              <button
                className={`${scss.tabButton} ${
                  activeTab === 1 ? scss.activeButton : ""
                }`}
                onClick={() => handleTabClick(1)}
              >
                <Image src={youtube2} alt="" />
                <h3>
                  2 Reactive approach <br /> <span>Урок</span>
                </h3>
              </button>
              <button
                className={`${scss.tabButton} ${
                  activeTab === 2 ? scss.activeButton : ""
                }`}
                onClick={() => handleTabClick(2)}
              >
                <Image src={youtube3} alt="" />
                <h3>
                  3 Observable example <br /> <span>Урок</span>
                </h3>
              </button>
              <button
                className={`${scss.tabButton} ${
                  activeTab === 3 ? scss.activeButton : ""
                }`}
                onClick={() => handleTabClick(3)}
              >
                <Image src={youtube4} alt="" />
                <h3>
                  4 Implementing and subscribing
                  <br /> <span>Урок</span>
                </h3>
              </button>
              <div className={scss.buttons}>
                <button className={scss.prew} onClick={handlePrevClick}>
                  Предыдущий урок
                </button>
                <button className={scss.next} onClick={handleNextClick}>
                  Следующий урок
                </button>
              </div>
            </div>
          </div>
          <div className={scss.text_end}>
            <h3>
              Как работает многопоточность в Java? Старая добрая многопоточность
              в Java — это базовые примитивы многопоточности:
            </h3>
            <li>Threads (потоки);</li>
            <li>Synchronization (синхронизация);</li>
            <li>Wait/notify (ожидание/уведомление).</li>
          </div>
          <div className={scss.text_end2}>
            <h3>Сложно писать, сложно отлаживать, сложно тестировать.</h3>
            <li>Java 5 Future interface:</li>
            <li>V get()</li>
            <li>boolean cancel() V get()</li>
            <li>boolean isCancelled()</li>
            <li>boolean isDone()</li>
            <li>Executors</li>
            <li>Callable interface</li>
            <li>BlockingQueue</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reactivity;
