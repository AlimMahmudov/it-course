import React from "react";
import Hero from "./sections/hero/Hero";
import Comments from "./sections/comments/Comments";
import Other from "./sections/other-articles/Other";
import Breadcrumbs from "@/shared/ui/breadcrumbs/Breadcrumbs";
const breadcrumbs = [
  { label: "Главная", href: "/" },
  { label: "Статья", href: "/article" },
  { label: "Мы подготовили", href: "#" },
];
const ArticleSubscribePage = () => {
  return (
    <div className="container">
      <Breadcrumbs items={breadcrumbs} />
      <Hero />
      <Comments />
      <Other />
    </div>
  );
};

export default ArticleSubscribePage;
