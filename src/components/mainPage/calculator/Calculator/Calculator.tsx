import React, { FC, useEffect, useState } from "react";
import { RadioItemProps } from "../../../../models/types";
import Checkbox from "../../../ui/Checkbox/Checkbox";
import RadioSecondary from "../../../ui/radios/RadioSecondary/RadioSecondary";
import Slider, { SliderProps } from "../../../ui/Slider/Slider";
import Graph from "../Graph/Graph";
import PensionInfo from "../PensionInfo/PensionInfo";

import styles from "./Calculator.module.scss";

const Calculator: FC = () => {
  const [genderValue, setGenderValue] = useState<string>("60"); // гендерный возраст выхода на пенсию
  const [ageMan, setAgeMan] = useState("65"); // возраст выхода на пенсию мужчины
  const [ageWoman, setAgeWoman] = useState("60"); // возраст выхода на пенсию женщины
  const [ageValue, setAgeValue] = useState(30); // текущий возраст
  const [ageSliderMax, setAgeSliderMax] = useState(65); // устанавливаем атрибуты для ageSlider
  const [investmentTerm, setInvestmentTerm] = useState(35); // срок инвестирования => investmentTerm
  const [downPayment, setDownPayment] = useState(1000); // первичный взнос => downPayment
  const [monthlyInstallment, setMonthlyInstallment] = useState(5000); // ежемесячный взнос => monthlyInstallment
  const [periodPaymentPension, setPeriodPaymentPension] = useState(15); // срок выплат пенсии => periodPaymentPension
  const yearPersent = 0.05; // годовой процент накопления => annualPercentage
  const [generalAccumValue, setGeneralAccumValue] = useState(0); // общие накопления => generalSavings
  const [pensionValue, setPensionValue] = useState(0); // размер выплаты пенсии => pension

  const [earlyRretirement, setEarlyRretirement] = useState(false); // ускоренный выход на пенсию
  // const [earlyRretirementPeriod, setEarlyRretirementPeriod] = useState(5); // на сколько лет ускоренный выход на пенсию

  const radioItems: RadioItemProps[] = [
    { value: ageMan, title: "М", name: "gender" },
    { value: ageWoman, title: "Ж", name: "gender" },
  ];

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

  useEffect(() => {
    if (earlyRretirement) {
      setGenderValue("60");
      setAgeMan("60");
      setAgeWoman("55");
      setAgeSliderMax(60);
    } else {
      setGenderValue("60");
      setAgeMan("65");
      setAgeWoman("60");
      setAgeSliderMax(60);
    }
  }, [earlyRretirement]);

  const onChangeGenderRadio = (emitGenderRadio: React.SetStateAction<string>) => {
    setGenderValue(emitGenderRadio);
    setAgeSliderMax(Number(emitGenderRadio));
  };
  // console.log("ageSliderMax :" + ageSliderMax);

  const toogleChecked = () => {
    setEarlyRretirement((prev) => !prev);
  };

  // console.log("ageMan :" + ageMan);
  // console.log("ageWoman :" + ageWoman);
  // console.log("genderValue :" + genderValue);
  // console.log(earlyRretirement);

  const ageSliderHandler = (ageSliderValue: React.SetStateAction<number>) => {
    setAgeValue(ageSliderValue);
  };
  const downPaymentSliderHandler = (downPaymentValue: React.SetStateAction<number>) => {
    setDownPayment(downPaymentValue);
  };
  const monthlyInstallmenSliderHandler = (monthlyInstallmentValue: React.SetStateAction<number>) => {
    setMonthlyInstallment(monthlyInstallmentValue);
  };
  const periodPaymentPensionSliderHandler = (periodPaymentPension: React.SetStateAction<number>) => {
    setPeriodPaymentPension(periodPaymentPension);
  };

  useEffect(() => {
    setInvestmentTerm(Number(genderValue) - ageValue);

    // console.log("investmentTerm :" + investmentTerm);
    // console.log("downPayment :" + downPayment);
    // console.log("monthlyInstallment :" + monthlyInstallment);
    // console.log("periodPaymentPension :" + periodPaymentPension);

    // // обнуляем каждый раз накопления от первичного взноса
    let firstInvestAccumValue = 0;
    // // обнуляем каждый раз накопления ежемесячных взносов
    let monthInvestAccumValue = 0;

    // // вычисляем общий процент накопления за несколько лет
    let generalPercent = 1 + yearPersent;
    const percentInvestmentTerm = generalPercent ** investmentTerm;
    // console.log("percent:", percentInvestmentTerm);

    // // вычисляем накопления от первичного взноса
    firstInvestAccumValue = downPayment * percentInvestmentTerm;
    firstInvestAccumValue = Math.round(firstInvestAccumValue);
    // console.log("firstInvestAccumValue:" + firstInvestAccumValue);

    // // вычисляем количество месяцев ежемесячных взносов
    let numberOfMonths = investmentTerm * 12;
    // console.log("numberOfMonths:" + numberOfMonths);

    // // вычисляем накопления ежемесячных взносов за нескольк лет (количество месяцев ежемесячных взносов)
    monthInvestAccumValue = 0; // обнуляем при каждом новом движении слайдера или свиттча
    monthInvestAccumValue = Math.round(
      monthlyInstallment * numberOfMonths +
        monthlyInstallment * (numberOfMonths - 1) * ((yearPersent * numberOfMonths) / 24)
    );
    // console.log("monthInvestAccumValue:" + monthInvestAccumValue);

    // // вычисляем общие накопления
    setGeneralAccumValue(0);
    setGeneralAccumValue(Math.round(firstInvestAccumValue + monthInvestAccumValue));
    // console.log("generalAccumValue:" + generalAccumValue);

    // // вычисляем размер ежемесячной пенсии
    setPensionValue(Math.round(generalAccumValue / periodPaymentPension / 12));
    // console.log("pensionValue:", pensionValue);
    // console.log("finish");
  }, [
    genderValue,
    earlyRretirement,
    ageValue,
    investmentTerm,
    downPayment,
    monthlyInstallment,
    periodPaymentPension,
    generalAccumValue,
  ]);

  return (
    <section id="calculator" className={styles["calculator"]}>
      <div className={styles["calculator__container"]}>
        <h2 className={styles["calculator__heading"]}>Калькулятор</h2>
        <h1 className={styles["calculator__subheading"]}>Рассчитайте будущую пенсию</h1>
        <div className={styles["calculator__block"]}>
          <div className={styles["calculator__box"]}>
            <div className={styles["calculator__sliders"]}>
              <form className={styles["slider-block"]}>
                <div className={styles["slider-block__age"]}>
                  <div className={styles["slider-block__switch"]}>
                    <RadioSecondary
                      radioItems={radioItems}
                      emitValue={onChangeGenderRadio}
                      currentValue={genderValue}
                    />
                  </div>
                  <Slider
                    title={ageSlider.title}
                    name={ageSlider.name}
                    min={ageSlider.min}
                    max={ageSlider.max}
                    step={ageSlider.step}
                    value={ageSlider.value}
                    emitValue={ageSliderHandler}
                  />
                </div>

                <div>
                  <Slider
                    title={downPaymentSlider.title}
                    name={downPaymentSlider.name}
                    min={downPaymentSlider.min}
                    max={downPaymentSlider.max}
                    step={downPaymentSlider.step}
                    value={downPaymentSlider.value}
                    emitValue={downPaymentSliderHandler}
                  />
                  <Slider
                    title={monthlyInstallmenSlider.title}
                    name={monthlyInstallmenSlider.name}
                    min={monthlyInstallmenSlider.min}
                    max={monthlyInstallmenSlider.max}
                    step={monthlyInstallmenSlider.step}
                    value={monthlyInstallmenSlider.value}
                    emitValue={monthlyInstallmenSliderHandler}
                  />
                  <Slider
                    title={periodPaymentPensionSlider.title}
                    name={periodPaymentPensionSlider.name}
                    min={periodPaymentPensionSlider.min}
                    max={periodPaymentPensionSlider.max}
                    step={periodPaymentPensionSlider.step}
                    value={periodPaymentPensionSlider.value}
                    emitValue={periodPaymentPensionSliderHandler}
                  />
                </div>

                <div className={styles["slider-block__checkbox"]}>
                  <Checkbox
                    checkedValue={earlyRretirement}
                    toogleChecked={toogleChecked}
                    title="Выход на пенсию в 55/60 лет*"
                  />
                </div>

                {!earlyRretirement && (
                  <p className={styles["slider-block__checkbox-value"]}>
                    * Расчет производится на основании достижения возраста, дающего право на получение страховой пенсии
                    по старости, в случае если это предусмотрено пенсионным договором.
                  </p>
                )}
              </form>
            </div>
            <PensionInfo generalAccumValue={generalAccumValue} pensionValue={pensionValue} />
          </div>

          <div className={styles["calculator__graph-container"]}>
            <Graph />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
