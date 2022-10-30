import { useState, useEffect } from "react";
import listenerScroll from "../../services/listenerScroll";
import styles from "./ArrowToUp.module.css";

const ArrowToUp = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setActive(listenerScroll(700)));
  }, []);

  return (
    <>
      <div className={styles.navUp + " " + (active && styles.arrowUp)}>
        <a href="#up-page">
          <img
            className={styles.iconArrow}
            src="./icons/up-arrow.png"
            alt="Arrow to up"
          />
        </a>
      </div>
    </>
  );
};

export default ArrowToUp;
