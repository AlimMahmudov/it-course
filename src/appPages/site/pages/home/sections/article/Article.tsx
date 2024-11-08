"use client";
import card from "@/shared/assets/card.svg";
import { useLanguageStore } from "@/shared/stores/Language";
import Image from "next/image";
import scss from "./Article.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
            {[...Array(6)].map((_, index) => (
              <Link
                href="/article/article-subscribe"
                key={index}
                className={scss.article_box}
                style={{
                  marginBottom:
                    index === 0 || index === 1 || index === 2 ? "35px" : "",
                }}
              >
                <Image src={card} alt="" />
                <div className={scss.article_box_text}>
                  <p>{translate("Макалалар", "Статьи")}</p>
                  <h2>
                    {translate(
                      "Биз Java багыты боюнча эң популярдуу курстарды IBS Training Centerде даярдадык.",
                      "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center."
                    )}
                  </h2>
                  <div className={scss.article_data}>
                    <p>{translate("Окуу", "Читать")}</p>
                    <p>01.02.2022</p>
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
