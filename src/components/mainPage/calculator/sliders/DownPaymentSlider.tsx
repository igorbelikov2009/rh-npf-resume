import React, { FC } from "react";
import Slider, { SliderProps } from "../../../ui/Slider/Slider";

interface DownPaymentSliderProps {
  downPaymentSliderHandler: (value: React.SetStateAction<number>) => void;
}

const DownPaymentSlider: FC<DownPaymentSliderProps> = ({ downPaymentSliderHandler }) => {
  const downPaymentSlider: SliderProps = {
    title: " Первоначальный взнос, р",
    name: "downPayment",
    min: 0,
    max: 1000000,
    step: 10000,
    value: 10000,
    emitValue: function (event: React.SetStateAction<number>): void {
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
