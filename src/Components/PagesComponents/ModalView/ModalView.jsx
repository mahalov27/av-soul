import { useState, useEffect } from "react";
import { nextIndex, prevIndex} from "../../services/indexCounter.js"
import styles from "./ModalView.module.css";

const ModalView = (props) => {
  const { list, func, idx } = props;
  const [indexImages, setIndexImages] = useState(0);
  const [startX, setStartX] = useState(0)

  useEffect(() => {
    setIndexImages(Number(idx));
  }, [idx]);

  const toNextIndex = () => {
    setIndexImages(nextIndex(list.length, indexImages))
  };

  const toPrevIndex = () => {
    setIndexImages(prevIndex(list.length, indexImages))
  };

  const testOnDrag = (e) => {
     const endX = e.clientX;
     if (endX > startX) {
      toPrevIndex()
    } else if (endX < startX) {
      toNextIndex()
    }
  }

  const testStartX = (e) => {
    setStartX(e.clientX)
  }

  return (
    <div className={styles.modal}>
      <button type="button" className={styles.btn} onClick={toPrevIndex}>
        <img
          src={process.env.PUBLIC_URL + '/images/icons/arrow.png'}
          className={styles.img}
          alt="button to previous"  
        />
      </button>
      <img
        src={process.env.PUBLIC_URL + list[indexImages].src}
        alt={list[indexImages].alt.ua}
        className={styles.viewImg}
        onDragEnd={testOnDrag}
        onDragStart={testStartX}
      />
      <button type="button" className={styles.btn + " " + styles.nextBtn} onClick={toNextIndex}>
        <img
          src={process.env.PUBLIC_URL + '/images/icons/arrow.png'}
          className={styles.img}
          alt="button to next"
        />
      </button>
      <button
        type="button"
        className={styles.closeBtn + " " + styles.btn}
        onClick={func}
      >
        <img src={process.env.PUBLIC_URL + '/images/icons/close.png'} alt="close button" className={styles.img} />
      </button>
    </div>
  );
};

export default ModalView;
