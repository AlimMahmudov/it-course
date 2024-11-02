import React from "react";
import MasterClasses from "./sections/masterclasses/MasterClasses";
import AboutMaster from "./sections/aboutmaster/AboutMaster";
import Teacher from "./sections/teacher/Teacher";

const Master_classPage = () => {
  return (
    <div>
      {/* <MasterClasses /> */}
      <AboutMaster />
      <Teacher />
    </div>
  );
};

export default Master_classPage;
