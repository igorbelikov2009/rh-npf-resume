import React from "react";
import "../styles/dist/Layout.css";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <main className="layuot">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
