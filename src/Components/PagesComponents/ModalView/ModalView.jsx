import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getNewIndex } from "../../services/indexCounter";
import styles from "./ModalView.module.css";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ModalView = (props) => {
  const { list, func, idx } = props;
  const [[currentIndex, step], setPage] = useState([Number(idx), 0]);

  useEffect(() => {
    setPage([Number(idx), Number(idx)])
  },[idx])

  const paginate = (newStep) => {
    setPage([getNewIndex(list.length, currentIndex, newStep), newStep]);
  };


  return (
    <div className={styles.modal}>
      <button
        type="button"
        className={styles.btn + " " + styles.prevBtn}
        onClick={() => {
          paginate(-1);
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/icons/arrow.png"}
          className={styles.img}
          alt="button to previous"
        />
      </button>
      <AnimatePresence initial={false} custom={step}>
        <motion.img
          key={currentIndex}
          src={process.env.PUBLIC_URL + list[currentIndex].src}
          alt={list[currentIndex].alt.ua}
          className={styles.viewImg}
          custom={step}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <button
        type="button"
        className={styles.btn + " " + styles.nextBtn}
        onClick={() => {
          paginate(1);
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/icons/arrow.png"}
          className={styles.img}
          alt="button to next"
        />
      </button>
      <button
        type="button"
        className={styles.closeBtn + " " + styles.btn}
        onClick={func}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/icons/close.png"}
          alt="close button"
          className={styles.img}
        />
      </button>
    </div>
  );
};

export default ModalView;
