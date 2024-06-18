import { useState, useEffect } from "react";
import PagesAnimated from "../../components/PagesAnimated/PagesAnimated";
import { useSelector } from "react-redux";
import Gallery from "../../components/Gallery/Gallery";
import vocabulary from "../../json/aboutMeFeed.json";
import styles from "./AboutMePage.module.css";

const AboutMePage = () => {
  const language = useSelector((state) => state.myLanguage);
  const [isLoaded, setIsloaded] = useState(false);

  return (
    <PagesAnimated>
      <div className={styles.blockInfo}>
        <div className={styles.blockImg}>
          {!isLoaded &&  <div className={styles.skeleton}></div>}
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/aboutMePoster/photo_2023-03-18_09-28-08.webp"
            }
            className={styles.img}
            onLoad={() => setIsloaded(true)}
            alt="girl"
            style={{display: isLoaded ? "block" : "none"}}
          />
        </div>
        <div className={styles.text}>
          <h2>{vocabulary.title[language]}</h2>
          <p>{vocabulary.paragraphOne[language]}</p>
          <p>{vocabulary.paragraphTwo[language]}</p>
          <p>{vocabulary.paragraphThree[language]}</p>
        </div>
      </div>
      <Gallery />
    </PagesAnimated>
  );
};

export default AboutMePage;
