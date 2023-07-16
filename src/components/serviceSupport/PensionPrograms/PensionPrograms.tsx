import React from "react";
import { pensionPrograms } from "../../../data/serviceSupportData";
import ExpandingAnswer from "../../general/expanding/ExpandingAnswer/ExpandingAnswer";
import styles from "./PensionPrograms.module.scss";

const PensionPrograms = () => {
  return (
    <section className={styles["pension-programs"]}>
      <h1 className={styles["pension-programs__heading"]}>Пенсионные программы</h1>

      {pensionPrograms.map((obj) => (
        <ExpandingAnswer
          key={obj.question}
          question={obj.question}
          answer={obj.answer}
          isParagraph={obj.isParagraph}
          isParagraphBefore={obj.isParagraphBefore}
        />
      ))}
    </section>
  );
};

export default PensionPrograms;
