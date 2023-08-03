import React, { FC } from "react";
import { RadioItemProps } from "../../../../models/types";
import RadioSecondary from "../../../ui/radios/RadioSecondary/RadioSecondary";

interface GenderRadioProps {
  ageMan: string;
  ageWoman: string;
  genderValue: string;
  onChangeGenderRadio: (value: React.SetStateAction<string>) => void;
}

const GenderRadio: FC<GenderRadioProps> = ({ ageMan, ageWoman, genderValue, onChangeGenderRadio }) => {
  const optionsItems: RadioItemProps[] = [
    { value: ageMan, title: "М", name: "gender" },
    { value: ageWoman, title: "Ж", name: "gender" },
  ];

  return <RadioSecondary optionsItems={optionsItems} emitValue={onChangeGenderRadio} currentValue={genderValue} />;
};

export default GenderRadio;
