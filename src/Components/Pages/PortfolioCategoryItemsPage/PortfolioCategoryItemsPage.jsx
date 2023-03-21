import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PagesAnimated from "../../PagesAnimated/PagesAnimated";
import vocabulary from "../../../json/patrfolioCategoryTitlesFeed.json";
import styles from "./PortfolioCategoryItemsPage.module.css";
import Gallery from "../../PagesComponents/Gallery/Gallery";


const CategoryPage = () => {
  const { category } = useParams();
  const language = useSelector((state) => state.myLanguage);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToBack = () => {
    const hash = location.hash.length;
    navigate(hash > 0 ? -2 : -1);
  };

  return (
    <PagesAnimated>
      <div className={styles.titleBlock}>
        <img src={process.env.PUBLIC_URL + '/images/icons/up-arrow.png'} className={styles.linkToBack} onClick={handleGoToBack} alt={language === "ua" ? "Посилання назад" : "Link to back"}/>
        <h1 className={styles.title}>{vocabulary[category][language]}</h1>
      </div>
      <Gallery category={category}/>
    </PagesAnimated>
  );
};

export default CategoryPage;
