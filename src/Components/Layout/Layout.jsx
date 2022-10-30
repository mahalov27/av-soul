import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../PagesComponents/Header/Header";
import Footer from "../PagesComponents/Footer/Footer";
import ArrowToUp from "../PagesComponents/ArrowToUp/ArrowToUp";

const Layout = () => {

  const handleSCroll = (e) => {
    console.log(e);
  }
  return (
    <>
      <Header />
      <main className="contentContainer" onScroll={handleSCroll}>
        <Outlet />
      </main>
      <ArrowToUp />
      <Footer />
    </>
  );
};
export default Layout;
