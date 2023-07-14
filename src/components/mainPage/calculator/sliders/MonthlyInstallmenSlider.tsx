import React, { FC } from "react";
import Slider, { SliderProps } from "../../../ui/Slider/Slider";

interface MonthlyInstallmenSliderProps {
  monthlyInstallmenSliderHandler: (value: React.SetStateAction<number>) => void;
}

const MonthlyInstallmenSlider: FC<MonthlyInstallmenSliderProps> = ({ monthlyInstallmenSliderHandler }) => {
  const monthlyInstallmenSlider: SliderProps = {
    title: "Ежемесячный взнос, р.",
    name: "monthlyInstallment",
    min: 0,
    max: 50000,
    step: 500,
    value: 5000,
    emitValue: function (event: React.SetStateAction<number>): void {
      throw new Error("Function not implemented.");
    },
  };

  return (
    <Slider
      title={monthlyInstallmenSlider.title}
      name={monthlyInstallmenSlider.name}
      min={monthlyInstallmenSlider.min}
      max={monthlyInstallmenSlider.max}
      step={monthlyInstallmenSlider.step}
      value={monthlyInstallmenSlider.value}
      emitValue={monthlyInstallmenSliderHandler}
    />
  );
};

export default MonthlyInstallmenSlider;
