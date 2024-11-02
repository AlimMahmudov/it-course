"use client";
import React, { useState } from "react";
import scss from "./Left.module.scss";
import Image from "next/image";
import Question from "@/assets/imgq.svg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useLanguageStore } from "@/stores/Language";

interface AccordionItem {
  question: string;
  answer: string;
}

const Left: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { translate } = useLanguageStore();

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData: AccordionItem[] = [
    {
      question: translate(
        "Программалоодо резервдик сөздөр эмне?",
        "Что такое зарезервированные слова в программировании?"
      ),
      answer: translate(
        "Резервдик же ачкычтык сөздөр – бул белгиленген маанилери бар сөздөр жана код жазууда башка максаттарда, мисалы, өзгөрмөлөрдү аталышында колдонулбайт. Программалоо тилдериндеги кеңири таралган ачкычтык сөздөргө if/then/else конструкциялары же ар кандай цикл варианттары, мисалы, for жана while кирет.",
        "Зарезервированные или ключевые слова – это слова и выражения, которые имеют предопределенные значения и не могут использоваться при написании кода для иных целей, например, для именования переменных. Примеры распространенных ключевых слов в языках программирования – это конструкции if/then/else или различные варианты циклов. Вроде for и while."
      ),
    },
    {
      question: translate(
        "Мен жазылууну автоматтык жаңыланууга мажбур болбой аламбы?",
        "Могу ли я отказаться от автопродления подписки?"
      ),
      answer: translate(
        "Резервдик же ачкычтык сөздөр – бул белгиленген маанилери бар сөздөр жана код жазууда башка максаттарда, мисалы, өзгөрмөлөрдү аталышында колдонулбайт. Программалоо тилдериндеги кеңири таралган ачкычтык сөздөргө if/then/else конструкциялары же ар кандай цикл варианттары, мисалы, for жана while кирет.",
        "Зарезервированные или ключевые слова – это слова и выражения, которые имеют предопределенные значения и не могут использоваться при написании кода для иных целей, например, для именования переменных. Примеры распространенных ключевых слов в языках программирования – это конструкции if/then/else или различные варианты циклов. Вроде for и while."
      ),
    },
    {
      question: translate(
        "Мен акчамды кайтарып ала аламбы?",
        "Могу ли я вернуть деньги?"
      ),
      answer: translate(
        "Резервдик же ачкычтык сөздөр – бул белгиленген маанилери бар сөздөр жана код жазууда башка максаттарда, мисалы, өзгөрмөлөрдү аталышында колдонулбайт. Программалоо тилдериндеги кеңири таралган ачкычтык сөздөргө if/then/else конструкциялары же ар кандай цикл варианттары, мисалы, for жана while кирет.",
        "Зарезервированные или ключевые слова – это слова и выражения, которые имеют предопределенные значения и не могут использоваться при написании кода для иных целей, например, для именования переменных. Примеры распространенных ключевых слов в языках программирования – это конструкции if/then/else или различные варианты циклов. Вроде for и while."
      ),
    },
    {
      question: translate(
        "IT тармагындагы эң актуалдуу багыттар кандай?",
        "Какие направления в IT самые актуальные?"
      ),
      answer: translate(
        "Төртүнчү суроонун жообу.",
        "Ответ на четвертый вопрос."
      ),
    },
    {
      question: translate(
        "C++ тилин үйрөнүүдөн мурун башка программалоо тилин үйрөнүшүм керекпи?",
        "Нужно ли учить другой язык программирования, перед изучением языка C++?"
      ),
      answer: translate("Бешинчи суроонун жообу.", "Ответ на пятый вопрос."),
    },
    {
      question: translate("Платформа жаңыланабы?", "Платформа обновляется?"),
      answer: translate("Алтынчы суроонун жообу.", "Ответ на шестой вопрос."),
    },
    {
      question: translate(
        "Мен бардык курстарга кантип кире алам?",
        "Как я могу получить доступ ко всем курсам?"
      ),
      answer: translate("Жетинчи суроонун жообу.", "Ответ на седьмой вопрос."),
    },
  ];

  return (
    <section id={scss.Left}>
      <div className="container">
        <div className={scss.left}>
          <div className={scss.left_img}>
            <h1>{translate("Суроолоруңуз калдыбы?", "Остались вопросы?")}</h1>
            <Image src={Question} alt="img" />
          </div>
          <div className={scss.accordion}>
            {accordionData.map((item, index) => (
              <div key={index} className={scss.accordionItem}>
                <button
                  className={scss.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <span className={scss.icon}>
                    {activeIndex === index ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </button>
                <div
                  className={`${scss.accordionContent} ${
                    activeIndex === index ? scss.open : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Left;
