import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import portfolioCategoryFeed from "../../../json/portfolioCategoryListFeed.json";
import portfolioCategoryTextFeed from "../../../json/portfolioCategoryTextFeed.json";
import PagesAnimated from "../../PagesAnimated/PagesAnimated";
import styles from "./PortfolioCategoryListPage.module.css";

const PortfolioPage = () => {
  const [feeds, setFeeds] = useState(null);
  const actualityLanguage = useSelector((state) => state.myLanguage);
  const textContent = actualityLanguage.ua
    ? portfolioCategoryTextFeed[0].textContent.ua
    : portfolioCategoryTextFeed[0].textContent.eng;

  useEffect(() => {
    setFeeds(portfolioCategoryFeed);
  }, [setFeeds]);

  return (
    <PagesAnimated>
      <div className={styles.categoryTextConteiner}>
        <p className={styles.categoryText}>{textContent}</p>
      </div>
      <div className={styles.categoryList}>
        {feeds &&
          feeds.map((feed) => {
            return (
              <div key={feed.anchor} className={styles.categoryItem}>
                <Link to={feed.anchor}>
                  <div className={styles.categoryImgContainer}>
                    <img
                      className={`${styles.categoryImg} ${styles.categoryImgNone}`}
                      src={feed.src}
                      alt={feed.alt}
                    />
                    <img
                      className={`${styles.categoryImg} ${styles.top}`}
                      src={feed.changeSrc}
                      alt={feed.alt}
                    />
                  </div>
                </Link>
                <div className={styles.categoryDescription}>
                  <h6 className={styles.descriptionText}>
                    {actualityLanguage.ua
                      ? feed.description.ua
                      : feed.description.eng}
                  </h6>
                </div>
              </div>
            );
          })}
      </div>
    </PagesAnimated>
  );
};

export default PortfolioPage;
