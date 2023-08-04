import React, { FC } from "react";
import { IAdaptiveRadioItem } from "../../../../models/types";
import AdaptiveRadioItem from "../AdaptiveRadioItem/AdaptiveRadioItem";
import styles from "./AdaptiveRadio.module.scss";

interface AdaptiveRadioProps {
  optionsItems: IAdaptiveRadioItem[];
  emitValue: (event: string, id: string) => void;
  currentValue: string;
}

const AdaptiveRadio: FC<AdaptiveRadioProps> = ({ optionsItems, currentValue, emitValue }) => {
  const onChangeRadio = (value: string, id: string) => {
    emitValue(value, id);
  };

  return (
    <div className={styles["adaptive-radio"]}>
      {optionsItems.map((item) => (
        <AdaptiveRadioItem
          key={item.value}
          title={item.date}
          value={item.value}
          id={item.id}
          isActive={item.value === currentValue}
          emitValue={onChangeRadio}
        />
      ))}
    </div>
  );
};

export default AdaptiveRadio;
