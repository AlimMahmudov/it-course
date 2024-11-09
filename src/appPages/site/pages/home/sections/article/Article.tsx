"use client";
import { useLanguageStore } from "@/shared/stores/Language";
import Image from "next/image";
import scss from "./Article.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { articles } from "@/shared/const/articles";
const Article = () => {
  const { translate } = useLanguageStore();
  const path = usePathname();
  return (
    <div
      id={scss.Article}
      style={{
        padding: path === "/article" ? "0" : "",
      }}
    >
      <div className="container">
        <div className={scss.article}>
          <div className={scss.article_text}>
            <h1>
              {translate(
                path !== "/article" ? "Акыркы макалалар" : "Макалалар",
                path !== "/article" ? "Последние статьи" : "Статьи"
              )}
            </h1>
          </div>
          <div className={scss.article_block}>
            {articles.map((article) => (
              <Link
                href={`/article/${article.id}`}
                key={article.id}
                className={scss.article_box}
                style={{
                  marginBottom:
                    article.id === 1 || article.id === 2 || article.id === 3
                      ? "35px"
                      : "",
                }}
              >
                <Image src={article.mainArticles.image} alt="" />
                <div className={scss.article_box_text}>
                  <p>{translate("Макалалар", "Статьи")}</p>
                  <h2>{article.mainArticles.description}</h2>
                  <div className={scss.article_data}>
                    <p>{translate("Окуу", "Читать")}</p>
                    <p>{article.mainArticles.data}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className={scss.article_button}>
            {path !== "/article" && (
              <Link href="/article">
                <button>
                  {translate("Көбүрөөк көрсөтүү", "Показать больше")}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
