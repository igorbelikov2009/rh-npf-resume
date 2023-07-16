import React from "react";
import taxationImage from "../assets/images/taxation/taxationTop.jpg";
import TopBlock from "../components/general/TopBlock/TopBlock";
import TaxationTable from "../components/TaxationTable/TaxationTable";

const TaxationPage = () => {
  return (
    <>
      <TopBlock
        heading="Налогооблажение"
        subheading="Порядок налогообложения при выплате пенсий и выкупных сумм"
        image={taxationImage}
      />
      <TaxationTable />
    </>
  );
};

export default TaxationPage;
