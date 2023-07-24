// страница готова
import React from "react";
import TopBlock from "../components/general/TopBlock/TopBlock";
import aboutImage from "../assets/images/aboutFund/aboutFundTop.jpg";
import AboutUs from "../components/aboutFund/AboutUs/AboutUs";
import AboutFundBlock from "../components/aboutFund/AboutFundBlock/AboutFundBlock";
import Cards from "../components/general/cards/Cards/Cards";
import { aboutFundCardsAPI } from "../store/services/aboutFundCardAPI";
import ServerError from "../components/general/ServerError/ServerError";
import { ICard } from "../models/types";
import ServerIsLoading from "../components/general/ServerIsLoading/ServerIsLoading";

const AboutFundPage = () => {
  const { data, isLoading, isError } = aboutFundCardsAPI.useGetAboutFundCardsQuery(20);
  let aboutFundCards: ICard[] = [];
  if (data) {
    aboutFundCards = data;
  }

  return (
    <>
      <TopBlock
        image={aboutImage}
        heading="О фонде"
        subheading="На сегодняшний день АО НПФ 'Ренессанс пенсии' – один из крупнейших и надежных негосударственных пенсионных фондов на рынке негосударственного пенсионного обеспечения (НПО)."
      />

      <AboutUs />
      <AboutFundBlock />
      {isLoading && <ServerIsLoading />}
      {isError ? <ServerError /> : <Cards cards={aboutFundCards} />}
    </>
  );
};

export default AboutFundPage;
