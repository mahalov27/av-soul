import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./Layout/Layout";

const AboutMe = lazy(() => import("./Pages/AboutMePage/AboutMePage"));
const PortfolioPage = lazy(() => import("./Pages/PortfolioPage/PortfolioPage"));
const CategoryPage = lazy(() => import("./Pages/CategoryPage/CategoryPage"));
const PricesPage = lazy(() => import("./Pages/PricesPage/PricesPage"));
const ContactsPage = lazy(() => import("./Pages/ContactsPage/ContactsPage"));
const NotPage = lazy(() => import("./Pages/NotPage/NotPage"));

const App = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<AboutMe />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="portfolio/:category" element={<CategoryPage />} />
            <Route path="prices" element={<PricesPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default App;
