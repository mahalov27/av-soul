import { useState } from "react";
import listenerScroll from "../../services/listenerScroll";
import styles from "./ArrowToUp.module.css";

const ArrowToUp = () => {
  const [active, setActive] = useState(false);

  window.addEventListener("scroll", () => setActive(listenerScroll(700)));

  const toUpPage = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return (
    <>
      <div
        className={styles.navUp + " " + (active && styles.arrowUp)}
        onClick={toUpPage}
      >
        <img
          className={styles.iconArrow}
          src={process.env.PUBLIC_URL + "/images/icons/up-arrow.png"}
          alt="Arrow to up"
        />
      </div>
    </>
  );
};

export default ArrowToUp;
