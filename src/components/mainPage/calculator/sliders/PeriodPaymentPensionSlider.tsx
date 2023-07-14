import React, { FC } from "react";
import Slider, { SliderProps } from "../../../ui/Slider/Slider";

interface PeriodPaymentPensionSliderProps {
  periodPaymentPensionSliderHandler: (value: React.SetStateAction<number>) => void;
}

const PeriodPaymentPensionSlider: FC<PeriodPaymentPensionSliderProps> = ({ periodPaymentPensionSliderHandler }) => {
  const periodPaymentPensionSlider: SliderProps = {
    title: "Срок выплаты пенсии, лет",
    name: "periodPaymentPension",
    min: 5,
    max: 30,
    step: 1,
    value: 15,
    emitValue: function (event: React.SetStateAction<number>): void {
      throw new Error("Function not implemented.");
    },
  };

  return (
    <Slider
      title={periodPaymentPensionSlider.title}
      name={periodPaymentPensionSlider.name}
      min={periodPaymentPensionSlider.min}
      max={periodPaymentPensionSlider.max}
      step={periodPaymentPensionSlider.step}
      value={periodPaymentPensionSlider.value}
      emitValue={periodPaymentPensionSliderHandler}
    />
  );
};

export default PeriodPaymentPensionSlider;
