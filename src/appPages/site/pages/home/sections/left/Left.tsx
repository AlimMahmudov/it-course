"use client";
import Question from "@/shared/assets/imgq.svg";
import Animate from "@/shared/ui/animate/Animate";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import scss from "./Left.module.scss";

interface AccordionItem {
  question: string;
  answer: string;
}

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

const Left: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id={scss.Left}>
      <div className="container">
        <div className={scss.left}>
          <div className={scss.left_img}>
            <h1>Остались вопросы?</h1>
            <Image src={Question} alt="img" />
          </div>
          <div className={scss.accordion}>
            {accordionData.map((item, index) => (
              <Animate
                idx={index}
                isView={true}
                key={index}
                className={scss.accordionItem}
              >
                <button
                  className={scss.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>
                  <span className={scss.icon}>
                    {activeIndex === index ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </button>
                {activeIndex === index && (
                  <Animate
                    key={activeIndex}
                    className={`${scss.accordionContent}`}
                  >
                    <p>{item.answer}</p>
                  </Animate>
                )}
              </Animate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Left;
