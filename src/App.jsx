import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useFirstStart } from "./hooks/useFirstStart";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import LoaderJingle from "./components/LoaderJingle/LoaderJingle";
import { useEffect } from "react";

const AboutMe = lazy(() => import("./pages/AboutMePage/AboutMePage"));
const PortfolioCategoryListPage = lazy(() => import("./pages/PortfolioCategoryListPage/PortfolioCategoryListPage"));
const PortfolioCategoryItemsPage = lazy(() => import("./pages/PortfolioCategoryItemsPage/PortfolioCategoryItemsPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage/ServicesPage"));
const PriceDetailsPage = lazy(() => import("./pages/PriceDetailsPage/PriceDetailsPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const UserAccountPage = lazy(() => import("./pages/UserAccountPage/UserAccountPage"));
const AdminAccountPage = lazy(() => import("./pages/AdminAccountPage/AdminAccountPage"));
const NotPage = lazy(() => import("./pages/NotPage/NotPage"));

const App = () => {
  const { isFirstStart } = useFirstStart();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
  },[])

  return (
    <Suspense fallback={<Loader />}>
      {isFirstStart && <LoaderJingle />}
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<AboutMe />} />
            <Route path="portfolio" element={<PortfolioCategoryListPage />}/>
            <Route path="portfolio/:category" element={<PortfolioCategoryItemsPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:id" element={<PriceDetailsPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="user-account" element={<UserAccountPage />} />
            <Route path="admin" element={<AdminAccountPage />} />
            <Route path="*" element={<NotPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default App;
