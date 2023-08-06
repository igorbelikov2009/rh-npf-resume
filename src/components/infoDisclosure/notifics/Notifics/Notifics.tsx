import React, { useState } from "react";
import useDate from "../../../../api/useDate/useDate";
import { contentsNotifics } from "../../../../data/infoDisclosureData";
import { INotificsContent, RadioItemProps } from "../../../../models/types";
import RadioCircle from "../../../ui/radios/RadioCircle/RadioCircle";
import NotificsContent from "../NotificsContent/NotificsContent";
import styles from "./Notifics.module.scss";

const Notifics = () => {
  const [currentValue, setCurrentValue] = useState("0");

  const formattedContents: INotificsContent[] = contentsNotifics.map((item) => ({
    date: String(useDate.format(new Date(item.date))),
    description: String(item.description),
  }));

  const optionsItems: RadioItemProps[] = contentsNotifics
    .map((item) => new Date(item.date).getFullYear())
    .map((item, index) => ({
      title: String(item),
      value: String(index),
    }));

  const onChangeRadio = (value: string) => {
    setCurrentValue(value);
  };

  return (
    <section className={styles["notifics"]}>
      <div className={styles["notifics__container"]}>
        <h2 className={styles["notifics__heading"]}>Уведомления</h2>

        <div className={styles["notifics__triple-param-switch"]}>
          <RadioCircle currentValue={currentValue} optionsItems={optionsItems} emitValue={onChangeRadio} />
        </div>

        <div className={styles["notifics__content"]}>
          {formattedContents.map((content, index) => (
            <NotificsContent key={index} content={content} isVisible={Number(currentValue) === index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notifics;
