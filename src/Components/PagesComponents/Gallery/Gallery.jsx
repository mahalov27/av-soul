import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import portfolioCategiryItemsFeed from "../../../json/portfolioCategiryItemsFeed.json";
import ModalView from "../ModalView/ModalView";
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
    const list = portfolioCategiryItemsFeed.filter(
      (item) => item.category === category
    );
    setList(list);
  }, [category]);

  const handleIsOpenModal = (e) => {
    if (!isOpen) {
      setIndexImage(e.target.dataset.idx);
      setIsOpen(true);
    } else {
      setIsOpen(false);
      setIndexImage(0);
    }
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
              const { id, src, alt } = item;
              return (
                <div key={id}>
                  <img
                    src={process.env.PUBLIC_URL + src}
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
