import { useParams, useNavigate, useLocation, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import PagesAnimated from "../../components/PagesAnimated/PagesAnimated";
import vocabulary from "../../json/patrfolioCategoryTitlesFeed.json";
import portfolioCategiryItemsFeed from "../../json/portfolioCategiryItemsFeed.json";
import styles from "./PortfolioCategoryItemsPage.module.css";
import Gallery from "../../components/Gallery/Gallery";

const CategoryPage = () => {
  const { category } = useParams();
  const language = useSelector((state) => state.myLanguage);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToBack = () => {
    const hash = location.hash.length;
    navigate(hash > 0 ? -2 : -1);
  };

  if (!portfolioCategiryItemsFeed.some((item) => item.category === category)) {
    return (
      <>
        <h1 className={styles.title}>
          {language === "ua"
            ? "Такої категорії не існує"
            : "This category does not exist"}
        </h1>
        {language === "ua" ? (
          <p className={styles.helper}>
            Перейдіть до мого <NavLink to="/portfolio">Портфоліо</NavLink> та
            оберіть одну із запропонованих категорій.
          </p>
        ) : (
          <p className={styles.helper}>
            Go to My <NavLink to="/portfolio">Portfolio </NavLink> and select
            one of the categories.
          </p>
        )}
      </>
    );
  } else {
    return (
      <PagesAnimated>
        <div className={styles.titleBlock}>
          <img
            src={process.env.PUBLIC_URL + "/images/icons/up-arrow.png"}
            className={styles.linkToBack}
            onClick={handleGoToBack}
            alt={language === "ua" ? "Посилання назад" : "Link to back"}
          />
          <h1 className={styles.title}>{vocabulary[category][language]}</h1>
        </div>
        <Gallery category={category} />
      </PagesAnimated>
    );
  }
};

export default CategoryPage;
