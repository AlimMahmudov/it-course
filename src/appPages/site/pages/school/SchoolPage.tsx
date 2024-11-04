import React from "react";
// import dynamic from 'next/dynamic'
import School from "./sections/aboutSchool/School";
import Telegram from "../home/sections/telegram/Telegram";
import Pack from "./sections/pack/Pack";
import Review from "./sections/review/Review";
import Master from "./sections/master/Master";
import Courses from "./sections/courses/Courses";

const SchoolPage = () => {
  return (
    <>
      <School />
      <Courses />
      <Master />
      <Pack />
      <Review />
      <Telegram />
    </>
  );
};

export default SchoolPage;
