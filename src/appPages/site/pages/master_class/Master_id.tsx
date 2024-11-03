import React from "react";
import Part from "./sections/part/Part";
import AboutMaster from "./sections/aboutmaster/AboutMaster";
import Programma from "./sections/programma/Programma";
import Teacher from "./sections/teacher/Teacher";
import Process from "./sections/process/Process";
import Faq from "./sections/faq/Faq";

const Master_id = () => {
  return (
    <div>
      <Part />
      <AboutMaster />
      <Programma />
      <Teacher />
      <Process />
      <Faq />
    </div>
  );
};

export default Master_id;
