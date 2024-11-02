import React from "react";
import MasterClasses from "./sections/masterclasses/MasterClasses";
import AboutMaster from "./sections/aboutmaster/AboutMaster";
import Teacher from "./sections/teacher/Teacher";
import Faq from "./sections/faq/Faq";

const Master_classPage = () => {
  return (
    <div>
      {/* <MasterClasses /> */}
      <AboutMaster />
      <Teacher />
      <Faq />
    </div>
  );
};

export default Master_classPage;
