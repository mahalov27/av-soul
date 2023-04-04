import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../PagesComponents/Header/Header";
import Footer from "../PagesComponents/Footer/Footer";
import ArrowToUp from "../PagesComponents/ArrowToUp/ArrowToUp";
import Loader from "../PagesComponents/Loader/Loader";
import toUpPage from "../../services/toUpPage";
import styles from "./Layout.module.css";

const Layout = () => {
  const location = useLocation((data) => data.pathname);

  useEffect(() => {
    toUpPage();
  }, [location]);

  return (
    <>
      <Header />
      <main className={styles.contentContainer}>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
      <ArrowToUp />
      <Footer />
    </>
  );
};
export default Layout;
