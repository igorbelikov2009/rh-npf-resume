import React from "react";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <section className={styles["about-fund__about-us"]}>
      <p className={styles["about-fund__description"]}>
        Мы являемся одним из немногих безотраслевых фондов, что позволяет нам вести абсолютно прозрачную и независимую
        инвестиционную политику в отношении наших клиентов и занимать лидирующие позиции на протяжении последних 15 лет.
      </p>

      <p className={styles["about-fund__description"]}>
        Акционерами Фонда являются: ООО "Велби Холдинг" и АО СК "Ренессанс здоровье".
      </p>
    </section>
  );
};

export default AboutUs;
