import React, { FC } from "react";
import { Button } from "react-bootstrap";
import styles from "./NewsItem.module.scss";

interface NewsItemProps {
  id: number;
  title: string;
  date: string;
  paragraphs: string[];
  handlerRemove: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NewsItem: FC<NewsItemProps> = ({ id, title, date, paragraphs, handlerRemove }) => {
  return (
    <div className={styles["news-item"]}>
      <h3 className={styles["news-item__id"]}>id: {id} </h3>
      <p className={styles["news-item__title"]}> {title} </p>
      <p className={styles["news-item__date"]}> {date} </p>

      {paragraphs.map((paragraph, index) => (
        <p key={index} className={styles["news-item__paragraph"]}>
          {paragraph}
        </p>
      ))}

      <div className={styles["news-item__container-button"]}>
        <Button variant={"outline-danger"} onClick={handlerRemove}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default NewsItem;
