"use client";
import { useState } from "react";
import scss from "./Faq.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface AccordionItem {
  question: string;
  answer: string;
}

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData: AccordionItem[] = [
    {
      question: "Как мне начать обучение ?",
      answer:
        "Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.",
    },
    {
      question: "Могу ли я отказаться от автопродления подписки",
      answer:
        "Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.",
    },
    {
      question: "Могу ли я вернуть деньги",
      answer:
        "Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.",
    },
  ];

  return (
    <div id={scss.Faq}>
      <div className="container">
        <div className={scss.faq}>
          <div className={scss.faq_text}>
            <p>FAQ</p>
            <h1>Остались вопросы?</h1>
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
    </div>
  );
};

export default Faq;
