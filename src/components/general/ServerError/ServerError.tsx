import React from "react";
import styles from "./ServerError.module.scss";

const ServerError = () => {
  return (
    <>
      <h1 className={styles["server-error"]}> Запусти сервер: json-server --watch db.json --port 5000 </h1>
    </>
  );
};

export default ServerError;
