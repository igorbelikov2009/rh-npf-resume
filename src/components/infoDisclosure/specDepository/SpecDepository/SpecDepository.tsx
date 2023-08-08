import React, { useState } from "react";
import { depository1, depository2, optionsItemsSpecDepository } from "../../../../data/infoDisclosureData";
import RadioPrimary from "../../../ui/radios/RadioPrimary/RadioPrimary";
import SpecDepositoryItem from "../SpecDepositoryItem/SpecDepositoryItem";
import styles from "./SpecDepository.module.scss";

const SpecDepository = () => {
  const [currentValue, setCurrentValue] = useState("Contracts operating");

  const optionsItems = optionsItemsSpecDepository;

  const onChangePrimaryRadio = (value: React.SetStateAction<string>) => {
    setCurrentValue(value);
  };

  return (
    <>
      <div className={styles["spec-depository"]}>
        <div className={styles["spec-depository__container"]}>
          <h2 className={styles["spec-depository__heading"]}>Специализированный депозитарий</h2>

          <div className={styles["spec-depository__button-container"]}>
            <RadioPrimary optionsItems={optionsItems} currentValue={currentValue} emitValue={onChangePrimaryRadio} />
          </div>

          {currentValue === "Contracts operating" ? (
            <SpecDepositoryItem
              subheading={depository1.subheading}
              title={depository1.title}
              subtitle={depository1.subtitle}
            />
          ) : (
            <SpecDepositoryItem
              subheading={depository2.subheading}
              title={depository2.title}
              subtitle={depository2.subtitle}
            />
          )}
        </div>
      </div>

      <div className={styles["spec-depository__interactions"]}>
        <div className={styles["spec-depository__container"]}>
          <p className={styles["spec-depository__description"]}>
            Для информационного взаимодействия АО НПФ «Ренессанс пенсии», являясь участником системы электронного
            документооборота, использует обмен электронными документами в системе электронного документооборота АО ВТБ
            Специализированный депозитарий.
          </p>
        </div>
      </div>
    </>
  );
};

export default SpecDepository;
