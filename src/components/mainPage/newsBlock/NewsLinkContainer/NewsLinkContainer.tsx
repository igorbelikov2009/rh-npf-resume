import React, { FC, useEffect, useRef } from "react";
import { INewsLink } from "../../../../models/types";
import NewsLink from "../../../news/NewsLink/NewsLink";
import styles from "./NewsLinkContainer.module.scss";

interface NewsLinkContainerProps {
  isClear: boolean;
  link: INewsLink;
  emitWidthColumn: (value: number) => void;
}

const NewsLinkContainer: FC<NewsLinkContainerProps> = ({ isClear, link, emitWidthColumn }) => {
  const refColumn = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refColumn.current) {
      emitWidthColumn(refColumn.current.offsetWidth);
    }
  }, [emitWidthColumn]);

  return (
    <div ref={refColumn} className={isClear ? styles["container__clear"] : styles["container__blurry"]}>
      <NewsLink date={link.date} title={link.title} id={link.id} />
    </div>
  );
};

export default NewsLinkContainer;
