import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import PagesAnimated from "./../../PagesAnimated/PagesAnimated";
import pricesFeed from "../../../json/pricesFeed.json";
import styles from "./pricesPage.module.css";

const PricesPage = () => {
  const language = useSelector((state) => state.myLanguage);

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

  return (
    <PagesAnimated>
      <ul className={styles.blockPrices}>
        {pricesFeed &&
          pricesFeed.map((price) => {
            const backgroundStyles = {
              backgroundImage: `url(${process.env.PUBLIC_URL + price.src})`,
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
                  className={styles.priceCard}
                >
                  <h2 className={styles.priceTitle}>
                    {price.title[language]}
                  </h2>
                  {price.price && (
                    <h3 className={styles.price}>
                      {price.price}$ / 1{" "}
                      {language === "ua" ? "година" : "hour"}
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
                          to={listitem.id}
                          className={styles.price + " " + styles.links}
                        >
                          {listitem.listItem[language]}
                        </Link>
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
