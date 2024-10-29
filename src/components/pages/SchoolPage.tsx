import React from "react";
import School from "./school/aboutSchool/School";
import Courses from "./school/courses/Courses";
import Master from "./school/master/Master";
import Telegram from "./project/telegram/Telegram";
import Pack from "./school/pack/Pack";
import Review from "./school/review/Review";

const SchoolPage = () => {
  return (
    <div>
      <School />
      <Courses />
      <Master />
      <Pack />
      <Review />
      <Telegram />
    </div>
  );
};

export default SchoolPage;
