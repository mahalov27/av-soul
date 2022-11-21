import { useState, useEffect } from "react";
import styles from "./ModalView.module.css";

const ModalView = (props) => {
  const { list, func, idx } = props;
  const [indexImages, setIndexImages] = useState(0);
  const index = Number(indexImages);

  useEffect(() => {
    setIndexImages(idx);
  }, [idx]);

  const previousIndex = () => {
    if (index > 0) {
      setIndexImages(String(index - 1));
    } else {
      setIndexImages(String(list.length - 1));
    }
  };

  const nextIndex = () => {
    if (index < list.length - 1) {
      setIndexImages(String(index + 1));
    } else {
      setIndexImages("0");
    }
  };

  return (
    <div className={styles.modal}>
      <button type="button" className={styles.btn} onClick={previousIndex}>
        <img
          src="/icons/arrow.png"
          className={styles.img}
          alt="button to previous"  
        />
      </button>
      <img
        src={list[indexImages].src}
        alt={list[indexImages].alt.ua}
        className={styles.viewImg}
      />
      <button type="button" className={styles.btn + " " + styles.nextBtn} onClick={nextIndex}>
        <img
          src="/icons/arrow.png"
          className={styles.img}
          alt="button to next"
        />
      </button>
      <button
        type="button"
        className={styles.closeBtn + " " + styles.btn}
        onClick={func}
      >
        <img src="/icons/close.png" alt="close button" className={styles.img} />
      </button>
    </div>
  );
};

export default ModalView;
