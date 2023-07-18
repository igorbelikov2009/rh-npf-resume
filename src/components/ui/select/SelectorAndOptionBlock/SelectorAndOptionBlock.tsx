import React, { FC } from "react";
import { IOptionItem } from "../../../../models/types";
import OptionBlockForSelector from "../OptionBlockForSelector/OptionBlockForSelector";
import Selector from "../Selector/Selector";
import styles from "./SelectorAndOptionBlock.module.scss";

interface SelectorAndOptionBlockProps {
  isRadioListVisible: boolean;
  optionsItems: IOptionItem[];
  currentValue: string;
  onClickController: () => void;
  emitOnChangeRadioListBlock: (value: React.SetStateAction<string>, id: string) => void;
  emitOnClickRadioListBlock: () => void;
}

const SelectorAndOptionBlock: FC<SelectorAndOptionBlockProps> = ({
  isRadioListVisible,
  optionsItems,
  currentValue,
  onClickController,
  emitOnChangeRadioListBlock,
  emitOnClickRadioListBlock,
}) => {
  const onClickRadioListSelector = () => {
    onClickController();
  };

  const onChangeRadioListBlock = (value: React.SetStateAction<string>, id: string) => {
    emitOnChangeRadioListBlock(value, id);
  };
  const onClickRadioListBlock = () => {
    emitOnClickRadioListBlock();
  };

  return (
    <div className={styles["list"]}>
      <Selector value={currentValue} isVisible={isRadioListVisible} onClickSelector={onClickRadioListSelector} />

      <div className={isRadioListVisible ? styles["select-options_show"] : styles["select-options_hide"]}>
        <OptionBlockForSelector
          optionsItems={optionsItems}
          currentValue={currentValue}
          emitValue={onChangeRadioListBlock}
          onClickOptionsBlock={onClickRadioListBlock}
        />
      </div>
    </div>
  );
};

export default SelectorAndOptionBlock;
