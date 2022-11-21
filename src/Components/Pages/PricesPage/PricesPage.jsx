import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import PagesAnimated from "./../../PagesAnimated/PagesAnimated";
import pricesFeed from "../../../json/pricesFeed.json";
import styles from "./pricesPage.module.css";

const PricesPage = () => {
  const [prices, setPrices] = useState(null);
  const actualityLanguage = useSelector((state) => state.myLanguage);
  const animationCard = {
    hidden: {
      opacity: 0,
      top: "100%",
      transform: "translate(0, -50%)",
    },
    visible: {
      opacity: 1,
      top: "50%",
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    setPrices(pricesFeed);
  }, []);

  return (
    <PagesAnimated>
      <ul className={styles.blockPrices}>
        {prices &&
          prices.map((price) => {
            const backgroundStyles = {
              backgroundImage: `url(${price.src})`,
            };
            return (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                key={price.id}
                className={styles.blockPrice}
                style={backgroundStyles}
              >
                <motion.div
                  variants={animationCard}
                  className={styles.priceCard + " " + styles.left}
                >
                  <h2 className={styles.priceTitle}>
                    {actualityLanguage.ua ? price.title.ua : price.title.eng}
                  </h2>
                  <h3 className={styles.price}>
                    {price.price}$ / 1{" "}
                    {actualityLanguage.ua ? "година" : "hour"}
                  </h3>
                  <ul className={styles.servicesList}>
                    {price.listItems.map((listitem) => {
                      return (
                        <li key={listitem.id} className={styles.serviceItem}>
                          {actualityLanguage.ua
                            ? listitem.listItem.ua
                            : listitem.listItem.eng}
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </motion.li>
            );
          })}
      </ul>
    </PagesAnimated>
  );
};

export default PricesPage;
