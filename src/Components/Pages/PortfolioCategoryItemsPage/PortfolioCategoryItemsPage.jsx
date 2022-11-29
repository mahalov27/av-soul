import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Masonry from "react-masonry-css";
import PagesAnimated from "../../PagesAnimated/PagesAnimated";
import portfolioCategiryItemsFeed from "../../../json/portfolioCategiryItemsFeed.json";
import ModalView from "../../PagesComponents/ModalView/ModalView";
import styles from "./PortfolioCategoryItemsPage.module.css";

const CategoryPage = () => {
  const { category } = useParams();
  const actualityLaguage = useSelector((state) => state.myLanguage);
  const navigate = useNavigate();
  const location = useLocation();
  const [list, setList] = useState(0);
  const [indexImages, setIndexImages] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const breackpoints = {
    default: 4,
    960: 3,
    540: 2,
  };

  useEffect(() => {
    const list = portfolioCategiryItemsFeed.filter(
      (item) => item.category === category
    );
    setList(list);
  }, [category]);

  const getTitle = () => {
    let title = {
      ua: "",
      eng: "",
    };
    switch (category) {
      case "portraits":
        title = { ua: "Портрети", eng: "Portraits" };
        break;
      case "wedding_&_love_story":
        title = {
          ua: "Весілля та просто закохані",
          eng: "Weddings & Love Stories",
        };
        break;
      case "family_&_pregnancy":
        title = { ua: "Сім'я та вагітність", eng: "Family & Pregnancy" };
        break;
      default:
        title = { ua: "Упс", eng: "Oops" };
        break;
    }
    return actualityLaguage.ua ? title.ua : title.eng;
  };

  const handleIsOpenModal = (e) => {
    if (!isOpen) {
      setIndexImages(e.target.dataset.idx);
      setIsOpen(true);
    } else {
      setIsOpen(false);
      setIndexImages(0);
    }
  };

  const handleGoToBack = () => {
    const hash = location.hash.length;
    navigate(hash > 0 ? -2 : -1);
  };

  return (
    <PagesAnimated>
      <div className={styles.titleBlock}>
        <img src="/images/icons/up-arrow.png" className={styles.linkToBack} onClick={handleGoToBack} alt={actualityLaguage.ua ? "Посилання назад" : "Link to back"}/>
        <h1 className={styles.title}>{getTitle()}</h1>
      </div>
      {list.length === 0 && <p>not found images</p>}
      <div className={styles.list}>
        <Masonry
          breakpointCols={breackpoints}
          className={styles.grid}
          columnClassName={styles.gridColumn}
        >
          {list.length > 0 &&
            list.map((item, idx) => {
              const { id, src, alt } = item;
              return (
                <div key={id}>
                  <img
                    src={src}
                    alt={actualityLaguage.ua ? alt.ua : alt.eng}
                    className={styles.img}
                    data-idx={idx}
                    onClick={handleIsOpenModal}
                  />
                </div>
              );
            })}
        </Masonry>
      </div>
      {isOpen && (
        <ModalView list={list} idx={indexImages} func={handleIsOpenModal} />
      )}
    </PagesAnimated>
  );
};

export default CategoryPage;
