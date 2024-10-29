"use client";
import React, { useState } from "react";
import scss from "./Left.module.scss";
import Image from "next/image";
import leftq from "@/assets/imgq.svg";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Что такое зарезервированные слова в программировании?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Possimus assumenda, quasi maxime odio id amet. Rem eveniet accusantium, architecto placeat sapiente animi,consequatur ad enim porro, maiores odit vitae dicta?",
  },
  {
    id: 2,
    question: "Могу ли я отказаться от автопродления подписки",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Possimus assumenda, quasi maxime odio id amet. Rem eveniet accusantium, architecto placeat sapiente animi,consequatur ad enim porro, maiores odit vitae dicta?",
  },
  {
    id: 3,
    question: "Могу ли я вернуть деньги",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Possimus assumenda, quasi maxime odio id amet. Rem eveniet accusantium, architecto placeat sapiente animi,consequatur ad enim porro, maiores odit vitae dicta?",
  },
  {
    id: 4,
    question: "Какие направление в IT самые актуальные",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Possimus assumenda, quasi maxime odio id amet. Rem eveniet accusantium, architecto placeat sapiente animi,consequatur ad enim porro, maiores odit vitae dicta?",
  },
  {
    id: 5,
    question:
      "Нужно ли учить другой язык программирования, перед изучением языка С++?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Possimus assumenda, quasi maxime odio id amet. Rem eveniet accusantium, architecto placeat sapiente animi,consequatur ad enim porro, maiores odit vitae dicta?",
  },
  {
    id: 6,
    question: "Платформа обнавляется?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Possimus assumenda, quasi maxime odio id amet. Rem eveniet accusantium, architecto placeat sapiente animi,consequatur ad enim porro, maiores odit vitae dicta?",
  },
  {
    id: 7,
    question: "Как я могу получить доступ ка всем курсом",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Possimus assumenda, quasi maxime odio id amet. Rem eveniet accusantium, architecto placeat sapiente animi,consequatur ad enim porro, maiores odit vitae dicta?",
  },
];

const Left = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setActiveQuestion((prevId) => (prevId === id ? null : id));
  };

  return (
    <div id={scss.Left}>
      <div className="container">
        <div className={scss.left}>
          <div className={scss.left_img}>
            <h1>Остались вопросы?</h1>
            <Image src={leftq} alt="" />
          </div>
          <div className={scss.left_accardeon}>
            {questions.map((item) => (
              <div key={item.id} className={scss.accardeon}>
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className={scss.accordion_button}
                >
                  {item.question}
                </button>

                {activeQuestion === item.id && (
                  <div className={scss.accordion_p}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
