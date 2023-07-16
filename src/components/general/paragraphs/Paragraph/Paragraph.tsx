import React, { FC } from "react";
import styles from "./Paragraph.module.scss";

export interface IParagraph {
  paragraphs?: string[];
}

const Paragraph: FC<IParagraph> = ({ paragraphs }) => {
  return (
    <>
      {paragraphs &&
        paragraphs.map((paragraph, index) => (
          <p key={index} className={styles["paragraph"]}>
            {paragraph}
          </p>
        ))}
    </>
  );
};

export default Paragraph;
