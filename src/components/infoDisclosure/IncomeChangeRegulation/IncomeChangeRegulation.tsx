import React from "react";
import styles from "./IncomeChangeRegulation.module.scss";

const IncomeChangeRegulation = () => {
  return (
    <section className={styles["income-change-regulation"]}>
      <div className={styles["container"]}>
        <h2 className={styles["heading"]}>
          <br />
          Положение о возможности увеличения или уменьшения дохода
        </h2>

        <p className={styles["paragraph"]}>Просим вас обратить внимание на следующее:</p>

        <p className={styles["paragraph-before"]}>
          доход от размещения пенсионных резервов может увеличиваться или уменьшаться;
        </p>

        <p className={styles["paragraph-before"]}>
          результаты инвестирования в прошлом не определяют доходов в будущем;
        </p>

        <p className={styles["paragraph-before"]}>
          государство не гарантирует доходности размещения средств пенсионных резервов.
        </p>
      </div>
    </section>
  );
};

export default IncomeChangeRegulation;
