import Image from "next/image";
import scss from "./Programma.module.scss";
import men from "@/shared/assets/pro.svg";

const Programma = () => {
  return (
    <div id={scss.Programma}>
      <div className="container">
        <div className={scss.programma}>
          <div className={scss.programma_text}>
            <h1>ПРОГРАММА МАСТЕР-КЛАССА</h1>
          </div>
          <div className={scss.programma_block}>
            <div className={scss.programma_box}>
              <div className={scss.box}>
                <h1>1</h1>
                <p>Reactivity</p>
              </div>
              <div className={scss.box}>
                <h1>2</h1>
                <p>Reactivity</p>
              </div>
              <div className={scss.box}>
                <h1>3</h1>
                <p>Observable example</p>
              </div>
              <div className={scss.box}>
                <h1>4</h1>
                <p>Implementing and subscribing to an observer</p>
              </div>
              <div className={scss.box}>
                <h1>5</h1>
                <p>Reactive Streams spec</p>
              </div>
              <button>Купить мастер-класс</button>
            </div>

            <div className={scss.programma_img}>
              <Image src={men} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programma;
