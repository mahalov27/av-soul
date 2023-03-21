import PagesAnimated from "../../PagesAnimated/PagesAnimated";
import { useSelector } from "react-redux";
import Gallery from "../../PagesComponents/Gallery/Gallery";
import vocabulary from "../../../json/aboutMeFeed.json"
import styles from "./AboutMePage.module.css";

const AboutMePage = () => {
  const language = useSelector((state) => state.myLanguage);
  return (
    <PagesAnimated>
      <div className={styles.blockInfo}>
        <div className={styles.blockImg}>
          <img src={process.env.PUBLIC_URL + '/images/aboutMePoster/photo_2023-03-18_09-28-08.jpg'} className={styles.img} alt="girl"/>
        </div>
        <div className={styles.text}>
          <h2>{vocabulary.title[language]}</h2>
          <p>
          {vocabulary.paragraphOne[language]}
          </p>
          <p>
          {vocabulary.paragraphTwo[language]}
          </p>
          <p>
          {vocabulary.paragraphThree[language]}
          </p>
        </div>
      </div>
      <Gallery />
    </PagesAnimated>
  );
};

export default AboutMePage;
