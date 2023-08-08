import React, { FC } from "react";
import Slider, { ISlider } from "../../../ui/Slider";

interface DownPaymentSliderProps {
  downPaymentSliderHandler: (value: string) => void;
}

const DownPaymentSlider: FC<DownPaymentSliderProps> = ({ downPaymentSliderHandler }) => {
  const downPaymentSlider: ISlider = {
    title: " Первоначальный взнос, р",
    name: "downPayment",
    min: "0",
    max: "1000000",
    step: "10000",
    value: "10000",
    emitValue: function (event: string): void {
      throw new Error("Function not implemented.");
    },
  };

  return (
    <Slider
      title={downPaymentSlider.title}
      name={downPaymentSlider.name}
      min={downPaymentSlider.min}
      max={downPaymentSlider.max}
      step={downPaymentSlider.step}
      value={downPaymentSlider.value}
      emitValue={downPaymentSliderHandler}
    />
  );
};

export default DownPaymentSlider;
