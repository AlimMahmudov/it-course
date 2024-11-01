"use client";
import React, { useState } from "react";
import scss from "./Left.module.scss";
import Image from "next/image";
import Question from "@/assets/imgq.svg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface AccordionItem {
  question: string;
  answer: string;
}

const Left: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData: AccordionItem[] = [
    {
      question: "Что такое зарезервированные слова в программировании?",
      answer:
        "Зарезервированные или ключевые слова – это слова и выражения, которые имеют предопределенные значения и не могут использоваться при написании кода для иных целей, например, для именования переменных. Примеры распространенных ключевых слов в языках программирования – это конструкции if/then/else или различные варианты циклов. Вроде for и while.",
    },
    {
      question: "Могу ли я отказаться от автопродления подписки?",
      answer:
        "Зарезервированные или ключевые слова – это слова и выражения, которые имеют предопределенные значения и не могут использоваться при написании кода для иных целей, например, для именования переменных. Примеры распространенных ключевых слов в языках программирования – это конструкции if/then/else или различные варианты циклов. Вроде for и while.",
    },
    {
      question: "Могу ли я вернуть деньги?",
      answer:
        "Зарезервированные или ключевые слова – это слова и выражения, которые имеют предопределенные значения и не могут использоваться при написании кода для иных целей, например, для именования переменных. Примеры распространенных ключевых слов в языках программирования – это конструкции if/then/else или различные варианты циклов. Вроде for и while.",
    },
    {
      question: "Какие направления в IT самые актуальные?",
      answer: "Ответ на четвертый вопрос.",
    },
    {
      question:
        "Нужно ли учить другой язык программирования, перед изучением языка C++?",
      answer: "Ответ на пятый вопрос.",
    },
    { question: "Платформа обновляется?", answer: "Ответ на шестой вопрос." },
    {
      question: "Как я могу получить доступ ко всем курсам?",
      answer: "Ответ на седьмой вопрос.",
    },
  ];

  return (
    <section className={scss.DoYouHave}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <h1>
              Остались <br />
              вопросы?
            </h1>
            <Image src={Question} alt="img" width={170} height={170} />
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
