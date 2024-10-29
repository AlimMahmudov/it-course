import React from "react";
import AboutUs from "./us/aboutUs/AboutUs";
import Telegram from "./project/telegram/Telegram";
import Review from "./school/review/Review";
import Certificate from "./us/certificate/Certificate";

const UsPage = () => {
  return (
    <div>
      <AboutUs />
      <Certificate />
      <Review />
      <Telegram />
    </div>
  );
};

export default UsPage;
