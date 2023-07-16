import React, { FC } from "react";
import styles from "./ParagraphBefore.module.scss";

export interface IParagraphBefore {
  paragraphs: string[];
}

const ParagraphBefore: FC<IParagraphBefore> = ({ paragraphs }) => {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={styles["paragraph-before"]}>
          {paragraph}
        </p>
      ))}
    </>
  );
};

export default ParagraphBefore;
