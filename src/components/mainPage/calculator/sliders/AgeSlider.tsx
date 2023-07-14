import React, { FC } from "react";
import Slider, { SliderProps } from "../../../ui/Slider/Slider";

interface AgeSliderProps {
  ageSliderMax: number;
  ageSliderHandler: (value: React.SetStateAction<number>) => void;
}

const AgeSlider: FC<AgeSliderProps> = ({ ageSliderMax, ageSliderHandler }) => {
  const ageSlider: SliderProps = {
    title: "Возраст, лет",
    name: "ageSlider",
    min: 18,
    max: ageSliderMax,
    step: 1,
    value: 30,
    emitValue: function (event: React.SetStateAction<number>): void {
      throw new Error("Function not implemented.");
    },
  };
  return (
    <Slider
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
