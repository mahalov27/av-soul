import { Outlet } from "react-router-dom";
import Header from "../PagesComponents/Header/Header";
import Footer from "../PagesComponents/Footer/Footer";
import ArrowToUp from "../PagesComponents/ArrowToUp/ArrowToUp";
import styles from "./Layout.module.css"

const Layout = () => {

  return (
    <>
      <Header />
      <main className={styles.contentContainer} >
        <Outlet />
      </main>
      <ArrowToUp />
      <Footer />
    </>
  );
};
export default Layout;
