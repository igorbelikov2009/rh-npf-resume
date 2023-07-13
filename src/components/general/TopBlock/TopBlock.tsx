import React, { FC } from "react";
import styles from "./TopBlock.module.scss";

interface TopBlockProps {
  heading: string;
  headingSpan?: string;
  subheading?: string;
  subheadingSpan?: string;
  image: string;
}

const TopBlock: FC<TopBlockProps> = ({ heading, headingSpan, subheading, subheadingSpan, image }) => {
  return (
    <section className={styles["top-block"]} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles["top-block__container"]}>
        <h1 className={styles["top-block__heading"]}>
          {heading}

          <span className={styles["top-block__heading_span"]}> {headingSpan} </span>
        </h1>

        <h2 className={styles["top-block__subheading"]}>
          {subheading}

          <span className={styles["top-block__subheading_span"]}>{subheadingSpan}</span>
        </h2>
      </div>
    </section>
  );
};

export default TopBlock;
