"use client";
import { useLanguageStore } from "@/shared/stores/Language";
import scss from "./Courses.module.scss";
import { Courses as _Courses } from "@/shared/components/courses/Courses";

const Courses = () => {
  const { translate } = useLanguageStore();

  return (
    <div id={scss.Courses}>
      <div className="container">
        <div className={scss.courses}>
          <div className={scss.courses_text}>
            <h1>{translate("Курстар", "Курсы")}</h1>
          </div>
          <_Courses max={"3"} />
          <div className={scss.courses_button}>
            <button>{translate("Бардык курстар", "Все курсы")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
