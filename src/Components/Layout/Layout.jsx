import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { language } from "../../redux/language/languageSlice"
import Header from "../PagesComponents/Header/Header";
import Footer from "../PagesComponents/Footer/Footer";
import ArrowToUp from "../PagesComponents/ArrowToUp/ArrowToUp";

const Layout = () => {
  const dispatch = useDispatch();
  const actualityLanguage = JSON.parse(localStorage.getItem("language"));

  useEffect(() => {
    dispatch(language(actualityLanguage))
  }, [dispatch, actualityLanguage])

  return (
    <>
      <Header />
      <main className="contentContainer" >
        <Outlet />
      </main>
      <ArrowToUp />
      <Footer />
    </>
  );
};
export default Layout;
