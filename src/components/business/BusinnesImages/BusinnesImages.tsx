import React from "react";
import styles from "./BusinnesImages.module.scss";

const BusinnesImages = () => {
  return (
    <section className={styles["businnes-images"]}>
      <div className={styles["businnes-images__container"]}>
        <img src="/images/businnes/table.jpg" alt="table" className={styles["businnes-images__image"]} />
        <img src="/images/businnes/workers.jpg" alt="workers" className={styles["businnes-images__image"]} />
      </div>
    </section>
  );
};

export default BusinnesImages;
