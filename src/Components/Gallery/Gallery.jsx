import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import portfolioCategiryItemsFeed from "../../json/portfolioCategiryItemsFeed.json";
import ModalView from "../../components/ModalView/ModalView";
import getRandomListItems from "../../services/getRandomListItems";
import Loader from "../Loader/Loader";
import Masonry from "react-masonry-css";
import GallerySkeleton from "./GallerySkeleton";
import useImgLoadConrtol from "../../hooks/useImgLoadConrtol";
import styles from "./Gallery.module.css";

const Gallery = ({ category }) => {
  const language = useSelector((state) => state.myLanguage);
  const [list, setList] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [indexImage, setIndexImage] = useState(0);
  const {isAllImgLoaded, isLoadedImg} = useImgLoadConrtol(list)

  const breackpoints = {
    default: 4,
    960: 3,
    540: 2,
  };

  useEffect(() => {
    if (category) {
      const list = portfolioCategiryItemsFeed.filter(
        (item) => item.category === category
      );
      setList(list.sort(() => Math.random() - 0.5));
    } else {
      setList(getRandomListItems(portfolioCategiryItemsFeed));
    }
  }, [category]);

  const handleIsOpenModal = (e) => {
    if (!isOpen) {
      setIndexImage(e.target.dataset.idx);
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsOpen(false);
      setIndexImage(0);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      {!isAllImgLoaded && (
        <>
          <GallerySkeleton /> 
          <Loader />
        </>
      )}
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
                <div
                  key={id}
                  style={{ display: isAllImgLoaded ? "block" : "none" }}
                >
                  <img
                    src={process.env.PUBLIC_URL + src_min}
                    alt={alt[language]}
                    className={styles.img}
                    data-idx={idx}
                    onLoad={isLoadedImg}
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

const MemoizedGallery = React.memo(Gallery);
export default MemoizedGallery;
