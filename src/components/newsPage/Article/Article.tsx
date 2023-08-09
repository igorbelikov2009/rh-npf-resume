import React, { FC } from "react";
import { INews } from "../../../models/types";
import styles from "./Article.module.scss";

const Article: FC<INews> = ({ id, title, date, paragraphs }) => {
  return (
    <div className={styles["news__container"]}>
      <h1 className={styles["news__heading"]}> {title} </h1>
      <p className={styles["news__date"]}> {date} </p>

      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={styles["news__paragraph"]}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default Article;
