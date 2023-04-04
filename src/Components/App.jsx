import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./Layout/Layout";
import Loader from "./PagesComponents/Loader/Loader";

const AboutMe = lazy(() => import("./Pages/AboutMePage/AboutMePage"));
const PortfolioCategoryListPage = lazy(() => import("./Pages/PortfolioCategoryListPage/PortfolioCategoryListPage"));
const PortfolioCategoryItemsPage = lazy(() => import("./Pages/PortfolioCategoryItemsPage/PortfolioCategoryItemsPage"));
const ServicesPage = lazy(() => import("./Pages/ServicesPage/ServicesPage"));
const PriceDetailsPage = lazy(() => import("./Pages/PriceDetailsPage/PriceDetailsPage"))
const ContactsPage = lazy(() => import("./Pages/ContactsPage/ContactsPage"));
const NotPage = lazy(() => import("./Pages/NotPage/NotPage"));

const App = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<Loader/>}>
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<AboutMe />} />
            <Route path="portfolio" element={<PortfolioCategoryListPage />} />
            <Route path="portfolio/:category" element={<PortfolioCategoryItemsPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:id" element={<PriceDetailsPage/>} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default App;
