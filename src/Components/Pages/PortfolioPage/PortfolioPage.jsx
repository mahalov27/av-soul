import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryFeed from "../../../json/categoryFeed.json";
import PagesAnimated from "../../PagesAnimated/PagesAnimated";
import styles from "./PortfolioPage.module.css";

const PortfolioPage = () => {
  const [feeds, setFeeds] = useState(null);

  useEffect(() => {
    setFeeds(categoryFeed);
  },[]);

  return (
    <PagesAnimated>
        <div className={styles.categoryTextConteiner}>
          <p className={styles.categoryText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
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
                      {feed.description.ua}
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
