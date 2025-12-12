import React from "react";
import Masonry from "react-masonry-css";
import styles from "./GallerySkeleton.module.css";

const GallerySkeleton = () => {
  const breackpoints = {
    default: 4,
    960: 3,
    540: 2,
  };

  const getRandomAspectRatio = () => {
    return Math.random() < 0.5
      ? Math.random() * (1.4 - 1.2) + 1.2
      : Math.random() * (3.3 - 3.2) + 3.2;
  };

  return (
    <>
      <Masonry
        breakpointCols={breackpoints}
        className={styles.grid}
        columnClassName={styles.gridColumn}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className={styles.block}
            style={{ aspectRatio: `2 / ${getRandomAspectRatio()}` }}
          ></div>
        ))}
      </Masonry>
    </>
  );
};

export default React.memo(GallerySkeleton);
