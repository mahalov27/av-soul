
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import portfolioCategoryFeed from "../../../json/portfolioCategoryListFeed.json";
import styles from "./CategoryList.module.css"

const CategoryList = () => {
    const language = useSelector(state => state.myLanguage)

    return (
        <div className={styles.categoryList}>
        {portfolioCategoryFeed &&
          portfolioCategoryFeed.map((feed) => {
            return (
              <div key={feed.anchor} className={styles.categoryItem}>
                <Link to={feed.anchor} className={styles.link}>
                  <div className={styles.categoryImgContainer}>
                    <img
                      className={`${styles.categoryImg} 
                      ${styles.categoryImgNone}`}
                      src={process.env.PUBLIC_URL + feed.src}
                      alt={feed.alt}
                    />
                    <img
                      className={`${styles.categoryImg} ${styles.top}`}
                      src={process.env.PUBLIC_URL + feed.changeSrc}
                      alt={feed.alt}
                    />
                  </div>
                <div className={styles.categoryDescription}>
                  <h6 className={styles.descriptionText}>
                    {feed.description[language]}
                  </h6>
                </div>
                </Link>
              </div>
            );
          })}
      </div>
    )
}
    
export default CategoryList