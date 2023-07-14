import React, { FC } from "react";
import Checkbox from "../../../ui/Checkbox/Checkbox";

interface CheckboxRetirementProps {
  earlyRretirement: boolean;
  toogleChecked: () => void;
}

const CheckboxRetirement: FC<CheckboxRetirementProps> = ({ earlyRretirement, toogleChecked }) => {
  return (
    <Checkbox checkedValue={earlyRretirement} toogleChecked={toogleChecked} title="Выход на пенсию в 55/60 лет*" />
  );
};

export default CheckboxRetirement;
