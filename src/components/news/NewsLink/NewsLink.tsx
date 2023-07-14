import React, { FC } from "react";
import { Link } from "react-router-dom";
import { INewsLink } from "../../../models/types";
import styles from "./NewsLink.module.scss";

const NewsLink: FC<INewsLink> = ({ title, date, id }) => {
  return (
    <div className={styles["news-link"]}>
      <Link to={`/news/${id}`} className={styles["news-link__title"]}>
        {title}
      </Link>

      <p className={styles["news-link__date"]}>{date}</p>
    </div>
  );
};

export default NewsLink;
