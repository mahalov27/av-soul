import { useState, useEffect } from "react";
import listenerScroll from "../../services/listenerScroll";
import toUpPage from "../../services/toUpPage";
import styles from "./ArrowToUp.module.css";

const ArrowToUp = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setActive(listenerScroll(700)));
  }, [active]);

  

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
