import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import portfolioCategiryItemsFeed from "../../../json/portfolioCategiryItemsFeed.json";
import ModalView from "../ModalView/ModalView";
import getRandomListItems from "../../../services/getRandomListItems";
import Masonry from "react-masonry-css";
import styles from "./Gallery.module.css";

const Gallery = ({ category }) => {
  const language = useSelector((state) => state.myLanguage);
  const [list, setList] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [indexImage, setIndexImage] = useState(0);
  
  const breackpoints = {
    default: 4,
    960: 3,
    540: 2,
  };

  useEffect(() => {
    if(category){
      const list = portfolioCategiryItemsFeed.filter(
        (item) => item.category === category
      );
      setList(list);
    }else{

      setList(getRandomListItems(portfolioCategiryItemsFeed))
      }
      
  }, [category]);

  const handleIsOpenModal = (e) => {
    const body = document.querySelector("body")

    if (!isOpen) {
      setIndexImage(e.target.dataset.idx);
      setIsOpen(true);
    } else {
      setIsOpen(false);
      setIndexImage(0);
    }
    
    body.classList.toggle("desableScroll")
  };

  return (
    <>
      <div className={styles.list}>
        <Masonry
          breakpointCols={breackpoints}
          className={styles.grid}
          columnClassName={styles.gridColumn}
        >
          {list &&
            list.map((item, idx) => {
              const { id, src_min, alt } = item;
              return (
                <div key={id}>
                  <img
                    src={process.env.PUBLIC_URL + src_min}
                    alt={alt[language]}
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
        <ModalView list={list} idx={indexImage} func={handleIsOpenModal} />
      )}
    </>
  );
};

export default Gallery;
