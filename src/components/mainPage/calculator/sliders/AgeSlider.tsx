import React, { FC } from "react";
import SliderString, { ISlider } from "../../../ui/Slider";

interface AgeSliderProps {
  ageSliderMax: string;
  ageSliderHandler: (value: string) => void;
}

const AgeSlider: FC<AgeSliderProps> = ({ ageSliderMax, ageSliderHandler }) => {
  const ageSlider: ISlider = {
    title: "Возраст, лет",
    name: "ageSlider",
    min: "18",
    max: ageSliderMax,
    step: "1",
    value: "30",
    emitValue: function (event: string): void {
      throw new Error("Function not implemented.");
    },
  };
  return (
    <SliderString
      title={ageSlider.title}
      name={ageSlider.name}
      min={ageSlider.min}
      max={ageSlider.max}
      step={ageSlider.step}
      value={ageSlider.value}
      emitValue={ageSliderHandler}
    />
  );
};

export default AgeSlider;
