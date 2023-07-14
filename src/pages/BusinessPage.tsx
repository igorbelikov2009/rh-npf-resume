import React from "react";
import TopBlock from "../components/general/TopBlock/TopBlock";
import businessImage from "../assets/images/businnes/businnesTop.jpg";
import BusinessProgramm from "../components/business/BusinessProgramm/BusinessProgramm";
import BusinnesImages from "../components/business/BusinnesImages/BusinnesImages";
import "../styles/Businness.scss";

const BusinessPage = () => {
  return (
    <>
      <TopBlock
        heading="Для бизнеса"
        subheading="Пенсионная программа – современный, эффективный инструмент с уникальным набором опций и льгот, позволяющий влиять на мотивацию  сотрудников и управлять результативностью бизнеса, создавая для компании положительный имидж и характеризуя ее как социально ответственного работодателя."
        image={businessImage}
      />

      <div className="business-page">
        <BusinessProgramm />
        <BusinnesImages />
      </div>
    </>
  );
};

export default BusinessPage;
