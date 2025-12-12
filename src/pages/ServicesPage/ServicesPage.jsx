import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import PagesAnimated from "../../components/PagesAnimated/PagesAnimated";
import { animationCard } from "./animationCard";
import pricesFeed from "../../json/pricesFeed.json";
import useImgLoadConrtol from "../../hooks/useImgLoadConrtol";
import ServicesSkeleton from "./ServicesSkeleton";
import Loader from "../../components/Loader/Loader";
import styles from "./ServicesPage.module.css";
import PackageDetails from "../../components/PackageDetails/PackageDetails";

const ServicesPage = () => {
  const language = useSelector((state) => state.myLanguage);
  const { isAllImgLoaded, isLoadedImg } = useImgLoadConrtol(pricesFeed);

  return (
    <PagesAnimated>
      {!isAllImgLoaded && (
        <>
          <ServicesSkeleton />
          <Loader />
        </>
      )}
      <ul className={styles.blockPrices}>
        {pricesFeed &&
          pricesFeed.map((price) => {
            return (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                key={price.id}
                className={styles.blockPrice}
                
              >
                <img
                  src={`${process.env.PUBLIC_URL + price.src}`}
                  className={styles.background}
                  onLoad={isLoadedImg}
                  alt="background"
                  style={{ display: isAllImgLoaded ? "block" : "none" }}
                />
                <motion.div
                  variants={animationCard}
                  className={`${styles.priceCard} ${!price.details ? styles.withOutDetails : ''}`}
                >
                  <h2 className={styles.priceTitle}>{price.title[language]}</h2>
                  {price.price && (
                    <h3 className={styles.price}>
                      {`${price.price}₴ - 1
                      ${language === "ua" ? "година" : "hour"}`}
                    </h3>
                  )}
                  <ul className={styles.servicesList}>
                    {price.listItems.map((listitem) => {
                      return !listitem.isLink ? (
                        <li key={listitem.id} className={styles.serviceItem}>
                          {listitem.listItem[language]}
                        </li>
                      ) : (
                        <Link
                          key={listitem.id}
                          to={`wedding/${listitem.name}`}
                          className={styles.price + " " + styles.links}
                        >
                          {listitem.listItem[language]}
                        </Link>
                      );
                    })}
                  </ul>
                 {price.details && <PackageDetails details={price.details}/>}
                </motion.div>
              </motion.li>
            );
          })}
      </ul>
    </PagesAnimated>
  );
};

export default ServicesPage;
