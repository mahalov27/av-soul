import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PagesAnimated from "./../../PagesAnimated/PagesAnimated";
import pricesFeed from "../../../json/pricesFeed.json";
import styles from "./pricesPage.module.css";

const animationCard = {
  hidden: {
    opacity: 0,
    top: "100%",
    transform: "translate(0, -50%)"
  },
  visible: {
    opacity: 1,
    top: "50%",
    transition: {
      duration: 1,
    },
  },
};

const PricesPage = () => {
  const [prices, setPrices] = useState(null);

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
                viewport={{ once: true, amount: 0.8 }}
                key={price.title}
                className={styles.blockPrice}
                style={backgroundStyles}
              >
                <motion.div
                  variants={animationCard}
                  className={styles.priceCard + " " + styles.left}
                >
                  <h2 className={styles.priceTitle}>{price.title}</h2>
                  <h3 className={styles.price}>{price.price}$ / 1 hour</h3>
                  <ul className={styles.servicesList}>
                    {price.listItems.map((listitem) => {
                      return (
                        <li key={listitem.id} className={styles.serviceItem}>
                          {listitem.listItem}
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