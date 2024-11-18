"use client";
import { useLanguageStore } from "@/shared/stores/Language";
// import scss from "./Master.module.scss";
import scss from "./MasterClasses.module.scss";
import { useRouter } from "next-nprogress-bar";

const asim = [
  {
    title:
      "Реактивдүү программалоо Javaда: кантип, эмне үчүн жана ага арзыйбы?",
    dics: "Программалоо салыштырмалуу жаңы пайда болду, болжол менен 10 жыл мурун. Бул салыштырмалуу жаңы ыкманын популярдуулугун эмне жаратты жана азыр эмне үчүн ал трендде экенин РИТ++ конференциясында айтып берди...",
  },
];

const MasterClasses = () => {
  const { translate } = useLanguageStore();
  const router = useRouter();

  return (
    <div id={scss.Master}>
      <div className="container">
        <div className={scss.master}>
          <div className={scss.master_text}>
            <h1>{translate("Мастер-класстары", "Мастер-классы")}</h1>
          </div>
          <div className={scss.master_block}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                onClick={() => router.push("/master_class/master_id")}
                key={index}
                className={scss.master_box}
              >
                <div className={scss.asim_box}>
                  <h1>{asim[0].title}</h1>
                  <p>{asim[0].dics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterClasses;
