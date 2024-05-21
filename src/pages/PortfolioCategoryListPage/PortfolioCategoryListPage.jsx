// import { useSelector } from "react-redux";
import CategoryList from "../../components/CategoryList/CategoryList";
import PagesAnimated from "../../components/PagesAnimated/PagesAnimated";
// import portfolioCategoryTextFeed from "../../../json/portfolioCategoryTextFeed.json";
import styles from "./PortfolioCategoryListPage.module.css";

const PortfolioPage = () => {
  // const language = useSelector((state) => state.myLanguage);

  return (
    <PagesAnimated>
      <div className={styles.categoryTextConteiner}>
        {/* <p className={styles.categoryText}>{portfolioCategoryTextFeed[0].textContent[language]}</p> */}
      </div>
      <CategoryList/>
    </PagesAnimated>
  );
};

export default PortfolioPage;
