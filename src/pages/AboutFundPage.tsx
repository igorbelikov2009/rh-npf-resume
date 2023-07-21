// страница готова
import React from "react";
import TopBlock from "../components/general/TopBlock/TopBlock";
import aboutImage from "../assets/images/aboutFund/aboutFundTop.jpg";
import AboutUs from "../components/aboutFund/AboutUs/AboutUs";
import AboutFundBlock from "../components/aboutFund/AboutFundBlock/AboutFundBlock";
import Cards from "../components/general/cards/Cards/Cards";
import { aboutFundCards } from "../data/aboutFundData";

const AboutFundPage = () => {
  return (
    <>
      <TopBlock
        image={aboutImage}
        heading="О фонде"
        subheading="На сегодняшний день АО НПФ 'Ренессанс пенсии' – один из крупнейших и надежных негосударственных пенсионных фондов на рынке негосударственного пенсионного обеспечения (НПО)."
      />

      <AboutUs />
      <AboutFundBlock />
      {aboutFundCards && <Cards cards={aboutFundCards} />}
    </>
  );
};

export default AboutFundPage;
