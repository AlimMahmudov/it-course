import React, { useCallback, useState } from "react";
import styles from "./CourseFAQ.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Animate from "@/shared/components/animate/Animate";
const faq = [
  {
    id: "faq-1",
    question: "Как мне начать обучение ?",
    answer:
      "Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.",
  },
  {
    id: "faq-2",
    question: "Могу ли я отказаться от автопродления подписки",
    answer:
      "Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.",
  },
  {
    id: "faq-3",
    question: "Могу ли я вернуть деньги",
    answer:
      "Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.",
  },
];
const CourseFAQ: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState("");
  const toggle = useCallback(
    (id: string) => {
      setActiveFaq((p) => (p == id ? "" : id));
    },
    [setActiveFaq]
  );
  return (
    <section className={styles.course_faq}>
      <div className={`${styles["container"]} container`}>
        <div className={styles.faq_text}>
          <h6>FAQ</h6>
          <h4>Остались вопросы ?</h4>
        </div>
        <div className={styles.accordion}>
          {faq.map((item, idx) => (
            <Accordion
              activeFaq={activeFaq}
              toggle={toggle}
              key={item.id}
              item={item}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type TAccordionProps = {
  item: (typeof faq)[0];
  toggle(id: string): void;
  activeFaq: string;
  idx: number;
};
function Accordion({ item, toggle, activeFaq, idx }: TAccordionProps) {
  return (
    <Animate idx={idx} className={styles.accordionItem}>
      <button
        className={styles.accordionHeader}
        onClick={() => toggle(item.id)}
      >
        <p>{item.question}</p>
        <span className={styles.icon}>
          {activeFaq === item.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>
      {activeFaq === item.id && (
        <Animate key={activeFaq} className={`${styles.accordionContent}`}>
          <p>{item.answer}</p>
        </Animate>
      )}
    </Animate>
  );
}

export default CourseFAQ;
