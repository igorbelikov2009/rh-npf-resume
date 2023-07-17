import React, { FC } from "react";
import { INews } from "../../../models/types";
import styles from "./Article.module.scss";

const Article: FC<INews> = ({ id, title, date, paragraphs }) => {
  return (
    <div className={styles["news"]}>
      <div className={styles["news__header"]}>
        <h1 className={styles["news__header-heading"]}> {title} </h1>
        <p className={styles["news__header-date"]}> {date} </p>

        {paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles["news__paragraph"]}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Article;
