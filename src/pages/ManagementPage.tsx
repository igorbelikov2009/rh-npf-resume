import React from "react";
import managementImage from "../assets/images/management/managementTop.jpg";
import TopBlock from "../components/general/TopBlock/TopBlock";
import Management from "../components/management/Management/Management";

const ManagementPage = () => {
  return (
    <>
      <TopBlock heading="Руководство и команда" image={managementImage} />

      <Management />
    </>
  );
};

export default ManagementPage;
