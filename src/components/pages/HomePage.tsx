import React from "react";
import Home from "./project/home/Home";
import Article from "./project/article/Article";
import Subscribe from "./project/subscribe/Subscribe";
import Left from "./project/left/Left";
import Telegram from "./project/telegram/Telegram";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Article />
      <Subscribe />
      <Left />
      <Telegram />
    </div>
  );
};

export default HomePage;
