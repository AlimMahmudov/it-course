import React from "react";
import MasterClasses from "./sections/masterclasses/MasterClasses";
import AboutMaster from "./sections/aboutmaster/AboutMaster";
import Teacher from "./sections/teacher/Teacher";
import Faq from "./sections/faq/Faq";
import Process from "./sections/process/Process";
import Programma from "./sections/programma/Programma";
import Part from "./sections/part/Part";

const Master_classPage = () => {
  return (
    <div>
      {/* <MasterClasses /> */}
      <Part />
      <AboutMaster />
      <Programma />
      <Teacher />
      <Process />
      <Faq />
    </div>
  );
};

export default Master_classPage;
