import React from "react";
import scss from "./Courses.module.scss";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const Courses = () => {
  return (
    <div id={scss.Courses}>
      <div className="container">
        <div className={scss.courses}>
          <div className={scss.courses_text}>
            <h1>Курсы</h1>
          </div>
          <div className={scss.courses_block}>
            <div className={scss.courses_box}>
              <h1>Frontend-разработчик</h1>
              <p>
                Мастер создания сайтов. Умеет делать их красивыми,
                интерактивными, с большим функционалом. Профессия отлично
                подойдет тем, кто хочет фрилансить и постоянно разрабатывать
                новые проекты
              </p>
              <Link href="">
                Подробнее <FaLongArrowAltRight />
              </Link>
            </div>

            <div className={scss.courses_box}>
              <h1>Frontend-разработчик</h1>
              <p>
                Мастер создания сайтов. Умеет делать их красивыми,
                интерактивными, с большим функционалом. Профессия отлично
                подойдет тем, кто хочет фрилансить и постоянно разрабатывать
                новые проекты
              </p>
              <Link href="">
                Подробнее <FaLongArrowAltRight />
              </Link>
            </div>

            <div className={scss.courses_box}>
              <h1>Frontend-разработчик</h1>
              <p>
                Мастер создания сайтов. Умеет делать их красивыми,
                интерактивными, с большим функционалом. Профессия отлично
                подойдет тем, кто хочет фрилансить и постоянно разрабатывать
                новые проекты
              </p>
              <Link href="">
                Подробнее <FaLongArrowAltRight />
              </Link>
            </div>
          </div>
          <div className={scss.courses_button}>
            <button>Все курсы</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
