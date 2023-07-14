import React from "react";
import styles from "./Graph.module.scss";

const Graph = () => {
  // const listItems = Array(19)
  //   .fill(null)
  //   .map(() => <div className={styles["graph__vertical-line"]}></div>);
  //   <div className={styles["graph__diagram"]}>{listItems}</div>
  return (
    <div className={styles["graph"]}>
      <div className={styles["graph__diagram"]}>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
        <div className={styles["graph__vertical-line"]}></div>
      </div>
      <div className={styles["graph__years"]}>
        <p className={styles["graph__year"]}>2021</p>
        <p className={styles["graph__year"]}>2024</p>
        <p className={styles["graph__year"]}>2027</p>
        <p className={styles["graph__year"]}>2030</p>
        <p className={styles["graph__year"]}>2033</p>
        <p className={styles["graph__year"]}>2036</p>
        <p className={styles["graph__year"]}>2040</p>
        <p className={styles["graph__year"]}>2043</p>
      </div>
      <div className={styles["graph__sub"]}>
        <div className={styles["graph__subheading"]}>
          <div className={styles["graph__point-purple"]}></div>
          <p className={styles["graph__title"]}>Инвестиционный доход</p>
        </div>

        <div className={styles["graph__subheading"]}>
          <div className={styles["graph__point-yellow"]}></div>
          <p className={styles["graph__title"]}>Ежемесячные взносы</p>
        </div>
      </div>
    </div>
  );
};

export default Graph;
