import React from "react";
import TopBlock from "../components/general/TopBlock/TopBlock";
import businessImage from "../assets/images/businnes/businnesTop.jpg";
import BusinessProgramm from "../components/business/BusinessProgramm/BusinessProgramm";
import BusinnesImages from "../components/business/BusinnesImages/BusinnesImages";
import BusinnesStatistic from "../components/business/BusinnesStatistic/BusinnesStatistic";
import TaxPreferences from "../components/business/TaxPreferences/TaxPreferences";
import BusinessBlock from "../components/business/businessBlock/BusinessBlock/BusinessBlock";

const BusinessPage = () => {
  return (
    <>
      <TopBlock
        heading="Для бизнеса"
        subheading="Пенсионная программа – современный, эффективный инструмент с уникальным набором опций и льгот, позволяющий влиять на мотивацию  сотрудников и управлять результативностью бизнеса, создавая для компании положительный имидж и характеризуя ее как социально ответственного работодателя."
        image={businessImage}
      />

      <div className="business-page">
        <BusinessBlock />
        <BusinessProgramm />
        <BusinnesImages />
        <BusinnesStatistic />
        <TaxPreferences />
      </div>
    </>
  );
};

export default BusinessPage;
