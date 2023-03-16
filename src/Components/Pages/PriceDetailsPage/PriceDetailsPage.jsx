import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PagesAnimated from "../../PagesAnimated/PagesAnimated";
import priceDatails from "../../../json/priceDatailsFeed.json";
import { nextIndex, prevIndex } from "../../services/indexCounter";
import AttentionPrices from "../../PagesComponents/AttentionPrices/AttentionPrices";
import styles from "./PriceDetailsPage.module.css";

const PriceDetailsPage = () => {
  const { id } = useParams();
  const language = useSelector((state) => state.myLanguage);
  const [datails, setDeatails] = useState(null);
  const [indexOfElement, setIndexOfElement] = useState(null);

  useEffect(() => {
    setIndexOfElement(priceDatails.findIndex((item) => item.id === id));
    setDeatails(priceDatails);
  }, [id]);

  const handleNext = (e) => {
    e.preventDefault();
    setIndexOfElement(nextIndex(priceDatails.length, indexOfElement));
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setIndexOfElement(prevIndex(priceDatails.length, indexOfElement));
  };

  return (
    datails && (
      <PagesAnimated>
        <div
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + datails[indexOfElement].poster
            })`,
          }}
          className={styles.block}
        >
          <div className={styles.description}>
            <h2 className={styles.title}>
              {datails[indexOfElement].title[language]}
            </h2>
            <ul className={styles.list}>
              {datails[indexOfElement].listItems.map((item) => {
                return (
                  <li key={item.id} id={item.id} className={styles.listItem}>
                    {item.listitem[language]}
                  </li>
                );
              })}
            </ul>
            <p>
              {language === "ua" ? "Вартість" : "Price"}:
              {datails[indexOfElement].price} $
            </p>
          </div>
        </div>
        <div className={styles.blockBtn}>
          <button className={styles.btn} onClick={handlePrev}>
            <img
              src={process.env.PUBLIC_URL + "/images/icons/up-arrow.png"}
              className={styles.imgBtn + " " + styles.imgBtnNext}
              alt="icon button prev"
            />
          </button>
          <button className={styles.btn} onClick={handleNext}>
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
    )
  );
};

export default PriceDetailsPage;
