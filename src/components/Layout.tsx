import React from "react";
import "../styles/Layout.scss";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import TopMenu from "./topMenu/TopMenu/TopMenu";

const Layout = () => {
  return (
    <>
      <main className="layuot">
        <Outlet />
      </main>
      <TopMenu />

      <Footer />
    </>
  );
};

export default Layout;
