import React from "react";
import styles from "./PortfolioStructure.module.scss";

const PortfolioStructure = () => {
  return (
    <section className={styles["portfolio-structure"]}>
      <div className={styles["portfolio-structure__container"]}>
        <p className={styles["portfolio-structure__paragraph"]}>
          <a href="/investment#portfolioStructure" className={styles["link"]}>
            Структура инвестиционного портфеля Фонда
          </a>
        </p>

        <p className={styles["portfolio-structure__paragraph"]}>
          <a
            className={styles["portfolio-structure__link"]}
            target="_blank"
            href="/pdf/infoOpening/portfolio-structure/02 Информация о процессе размещения средств ПР_10.02-1581662050140.pdf"
          >
            Информация о процессе размещения средств пенсионных резервов (PDF)
          </a>
        </p>

        <p className={styles["portfolio-structure__paragraph"]}>
          <a
            className={styles["portfolio-structure__link"]}
            target="_blank"
            href="/pdf/infoOpening/portfolio-structure/03 Сведения об органах и должностных лицах_01.07.2021-1625146217407.pdf"
          >
            Сведения об органах управления, членах совета директоров Фонда, должностных лицах и работниках Фонда (PDF)
          </a>
        </p>

        <p className={styles["portfolio-structure__paragraph"]}>
          <br />
        </p>

        <p className={styles["portfolio-structure__paragraph"]}>
          АО НПФ «Ренессанс пенсии» во всех отчетных периодах деятельность по обязательному пенсионному страхованию не
          осуществлял.
        </p>
      </div>
    </section>
  );
};

export default PortfolioStructure;
