import React, { useState } from "react";
import { RadioItemProps } from "../../../models/types";
import RadioPrimary from "../../ui/radios/RadioPrimary/RadioPrimary";
import style from "./GeneralInfo.module.scss";

const GeneralInfo = () => {
  const [currentValue, setCurrentValue] = useState("information");

  const optionsItems: RadioItemProps[] = [
    { name: "information", title: "Сведения", value: "information" },
    { name: "information", title: "Реквизиты", value: "requisites" },
  ];

  const onChangePrimaryRadio = (value: React.SetStateAction<string>) => {
    setCurrentValue(value);
  };

  return (
    <section className={style["general-Info"]}>
      <div className={style["general-Info__container"]}>
        <h1 className={style["general-Info__heading"]}>Общие сведения</h1>
        <div className={style["general-Info__param-switch"]}>
          <RadioPrimary currentValue={currentValue} optionsItems={optionsItems} emitValue={onChangePrimaryRadio} />
        </div>

        <div>
          {currentValue === "information" ? (
            <div>
              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>
                  Полное фирменное наименование Фонда на русском языке
                </span>
                Акционерное общество негосударственный пенсионный фонд «Ренессанс пенсии»
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>
                  Сокращенное фирменное наименование Фонда на русском языке
                </span>
                АО НПФ «Ренессанс пенсии»
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>
                  Полное фирменное наименование Фонда на английском языке
                </span>
                Joint Stock Company Non-State Pension Fund Renaissance pensions
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>
                  Сокращенное фирменное наименование Фонда на английском языке
                </span>
                JSC NSPF Renaissance pensions
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>Лицензия</span>
                Лицензия на осуществление деятельности по пенсионному обеспечению и пенсионному страхованию <br />№
                383/2 от 16 июня 2009 года *
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>
                  Адрес места нахождения Фонда. Почтовый (контактный) адрес
                </span>
                115114, г. Москва, Дербеневская наб., д. 7, стр. 22
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>Обособленные подразделения</span>
                Нет
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>Фонд не работает с агентами</span>
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>
                  *Фонд вправе осуществлять деятельность по обязательному пенсионному страхованию после регистрации
                  страховых правил в Банке России и вступлении в систему гарантирования прав застрахованных лиц.
                </span>
              </p>
            </div>
          ) : (
            <div>
              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>Полное наименование Фонда на русском языке</span>
                Акционерное общество негосударственный пенсионный фонд «Ренессанс пенсии»
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>Юридический адрес</span>
                115114, г. Москва, Дербеневская наб., д. 7, стр. 22
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>Почтовый (контактный) адрес</span>
                115114, г. Москва, Дербеневская наб., д. 7, стр. 22
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>Идентификационный номер (ИНН/КПП)</span>
                9725000621 / 772501001
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>ОГРН</span>
                1187700021948
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>Код по ОКПО</span>
                34981417
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>ОКТМО</span>
                45914000000 – муниципальный округ Даниловский
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>ОКОП</span>
                12267
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>Полное наименование банка</span>
                Банк ВТБ (ПАО)
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>Расчетный счет (пенсионные резервы)</span>
                40701810726800000147
              </p>

              <p className={style["general-Info__paragraph"]}>
                <span className={style["general-Info__span"]}>Расчетный счет (собственные средства)</span>
                40701810026800000148
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeneralInfo;
