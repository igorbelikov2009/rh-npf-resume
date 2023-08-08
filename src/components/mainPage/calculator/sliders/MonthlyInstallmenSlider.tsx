import React, { FC } from "react";
import SliderString, { ISlider } from "../../../ui/Slider";

interface MonthlyInstallmenSliderProps {
  monthlyInstallmenSliderHandler: (value: string) => void;
}

const MonthlyInstallmenSlider: FC<MonthlyInstallmenSliderProps> = ({ monthlyInstallmenSliderHandler }) => {
  const monthlyInstallmenSlider: ISlider = {
    title: "Ежемесячный взнос, р.",
    name: "monthlyInstallment",
    min: "0",
    max: "50000",
    step: "500",
    value: "5000",
    emitValue: function (event: string): void {
      throw new Error("Function not implemented.");
    },
  };

  return (
    <SliderString
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
