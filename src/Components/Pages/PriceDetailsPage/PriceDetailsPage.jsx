import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import PagesAnimated from "../../PagesAnimated/PagesAnimated";
import priceDatails from "../../../json/priceDatailsFeed.json";
import { getNewIndex } from "../../services/indexCounter";
import { swipeConfidenceThreshold, swipePower, variants} from "../../services/swipeSettings";
import AttentionPrices from "../../PagesComponents/AttentionPrices/AttentionPrices";
import styles from "./PriceDetailsPage.module.css";

const PriceDetailsPage = () => {
  const { id } = useParams();
  const language = useSelector((state) => state.myLanguage);
  const [[currentIndex, step], setPage] = useState([0, 0]);

  useEffect(() => {
    setPage([priceDatails.findIndex((item) => item.id === id), 0]);
  }, [id]);

  const paginate = (newStep) => {
    setPage([getNewIndex(priceDatails.length, currentIndex, newStep), newStep]);
  };

  return (
    <PagesAnimated>
      <div className={styles.blockInfo}>
        <AnimatePresence initial={false} custom={step}>
          <motion.div
            key={currentIndex}
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + priceDatails[currentIndex].poster
              })`,
            }}
            className={styles.info}
            custom={step}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <div className={styles.description}>
              <h2 className={styles.title}>
                {priceDatails[currentIndex].title[language]}
              </h2>
              <ul className={styles.list}>
                {priceDatails[currentIndex].listItems.map((item) => {
                  return (
                    <li key={item.id} id={item.id} className={styles.listItem}>
                      {item.listitem[language]}
                    </li>
                  );
                })}
              </ul>
              <p>
                {language === "ua" ? "Вартість" : "Price"}:
                {priceDatails[currentIndex].price} $
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={styles.blockBtn}>
        <button
          className={styles.btn}
          onClick={() => {
            paginate(-1);
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/icons/up-arrow.png"}
            className={styles.imgBtn + " " + styles.imgBtnNext}
            alt="icon button prev"
          />
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            paginate(1);
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/icons/up-arrow.png"}
            className={styles.imgBtn + " " + styles.imgBtnPrev}
            alt="icon button prev"
          />
        </button>
      </div>
      <div className={styles.attentionBlock}>
        <AttentionPrices />
      </div>
    </PagesAnimated>
  );
};

export default PriceDetailsPage;
