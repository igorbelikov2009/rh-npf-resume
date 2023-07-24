import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "../pages/MainPage";
import AboutFund from "../pages/AboutFundPage";
import Business from "../pages/BusinessPage";
import Contact from "../pages/ContactPage";
import Info from "../pages/InfoDisclosurePage";
import Investment from "../pages/InvestmentPage";
import Management from "../pages/ManagementPage";
import News from "../pages/News";
import NewsPage from "../pages/NewsPage";
import NotFoundPage from "../pages/NotFoundPage";
import ServiceSupport from "../pages/ServiceSupportPage";
import Taxation from "../pages/TaxationPage";
import AdminPanel from "../pages/AdminPanelPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<AboutFund />} />
        <Route path="business" element={<Business />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="info" element={<Info />} />
        <Route path="investment" element={<Investment />} />
        <Route path="managment" element={<Management />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="support" element={<ServiceSupport />} />
        <Route path="taxation" element={<Taxation />} />
        <Route path="adminpanel" element={<AdminPanel />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
