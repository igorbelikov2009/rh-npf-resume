import { Outlet } from "react-router-dom";
import React, { FC } from "react";
import Footer from "./Footer";
import TopMenu from "./topMenu/TopMenu/TopMenu";
import "../styles/Layout.scss";

const Layout: FC = () => {
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
