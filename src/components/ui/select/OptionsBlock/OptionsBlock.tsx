import React, { FC } from "react";
import { IOptionItem } from "../../../../models/types";
import OptionItem from "../OptionItem/OptionItem";
import styles from "./OptionsBlock.module.scss";

interface OptionsBlockProps {
  arrayOptionsItem: IOptionItem[];
  currentValue: string;
  emitValue: (event: React.SetStateAction<string>, id: string) => void;
  onClickOptionsBlock: () => void;
}

const OptionsBlock: FC<OptionsBlockProps> = ({ arrayOptionsItem, currentValue, emitValue, onClickOptionsBlock }) => {
  const onChangeOption = (value: React.SetStateAction<string>, id: string) => {
    emitValue(value, id);
  };

  return (
    <div className={styles["options-block"]} onClick={onClickOptionsBlock}>
      <div className={styles["scrollable-block"]}>
        {arrayOptionsItem.map((option, index) => (
          <OptionItem
            key={index}
            date={option.date}
            value={option.value}
            id={option.id}
            isActive={option.value === currentValue}
            emitValue={onChangeOption}
          />
        ))}
      </div>
    </div>
  );
};

export default OptionsBlock;
