import React from "react";
import { questionsAboutPension } from "../../../data/serviceSupportData";
import ExpandingAnswer from "../../general/expanding/ExpandingAnswer/ExpandingAnswer";
import QuestionAnswerTable from "../QuestionAnswerTable/QuestionAnswerTable";
import styles from "./QuestionsAnswers.module.scss";

const QuestionsAnswers = () => {
  return (
    <section className={styles["questions-answers"]}>
      <h1 className={styles["questions-answers__heading"]}>Вопросы и ответы</h1>

      {questionsAboutPension.map((obj, index) => (
        <ExpandingAnswer
          key={index}
          question={obj.question}
          answer={obj.answer}
          isParagraph={obj.isParagraph}
          isParagraphBefore={obj.isParagraphBefore}
        />
      ))}

      <QuestionAnswerTable />
    </section>
  );
};

export default QuestionsAnswers;
