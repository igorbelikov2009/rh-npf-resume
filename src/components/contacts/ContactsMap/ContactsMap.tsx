import React from "react";
import styles from "./ContactsMap.module.scss";

const ContactsMap = () => {
  const uniqueTitle: string = "This is a unique title";
  return (
    <section className={styles["contacts-map"]}>
      <h1 className={styles["contacts-map__header"]}> ContactsMap </h1>
      <h1 className={styles["contacts-map__header"]}> Google не разрешает </h1>
      {/*  https://goo.gl/maps/9sZdGQbegAvrSnrh8 Google не разрешает  */}

      <iframe title={uniqueTitle} />
    </section>
  );
};

export default ContactsMap;
