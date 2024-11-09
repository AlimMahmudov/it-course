import React from "react";
import Article from "../home/sections/article/Article";
import Breadcrumbs from "@/shared/ui/breadcrumbs/Breadcrumbs";
const breadcrumbs = [
  { label: "Главная", href: "/" },
  { label: "Наши курсы", href: "#" },
];
const ArticlePage = () => {
  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />
      <Article />
    </div>
  );
};

export default ArticlePage;
