import React from "react";
import style from "./ServerIsLoading.module.scss";

const ServerIsLoading = () => {
  return (
    <div className={style["loader-container"]}>
      <span className={style["loader"]}></span>
    </div>
  );
};

export default ServerIsLoading;
