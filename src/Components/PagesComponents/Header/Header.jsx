import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import listenerScroll from "../../services/listenerScroll";
import Toggle from "../Toggle/Toggle";
import styles from "./header.module.css";

const Header = () => {
  const [fixedNavigation, setFixedNavigation] = useState(false);
  const [mobileNavigation, setMobileNovigation] = useState(false);
  const languageNow = useSelector((state) => state.myLanguage);

  useEffect(() => {
    const value = 180;
    window.addEventListener("scroll", () =>
      setFixedNavigation(listenerScroll(value))
    );
  }, []);

  const handleClick = () => {
    const body = document.querySelector("body");
    const screenWidth = window.innerWidth;

    !mobileNavigation ? setMobileNovigation(true) : setMobileNovigation(false);
    screenWidth <= 540 && body.classList.toggle("desableScroll");
  };

  return (
    <header className={styles.header} id="up-page">
      <div className={styles.logo}>
        <Link className={styles.logoLink} to="/">
          <img className={styles.logoImg} src="/icons/Logo.png" alt="logo" />
        </Link>
      </div>
      <div className={styles.navMobile} onClick={handleClick}>
        <div
          className={
            styles.navHamburger +
            " " +
            (mobileNavigation && styles.navHamburgerActive)
          }
        ></div>
      </div>
      <div
        className={
          styles.nav +
          " " +
          (fixedNavigation && styles.navFixed) +
          " " +
          (mobileNavigation && styles.navListActive)
        }
      >
        <ul className={styles.navList}>
          <li className={styles.navItem} onClick={handleClick}>
            <NavLink to="/" className={styles.navLink} end>
              {!languageNow.ua ? "About me" : "Про мене"}
            </NavLink>
          </li>
          <li className={styles.navItem} onClick={handleClick}>
            <NavLink to="portfolio" className={styles.navLink}>
              {!languageNow.ua ? "Portfolio" : "Портфоліо"}
            </NavLink>
          </li>
          <li className={styles.navItem} onClick={handleClick}>
            <NavLink to="prices" className={styles.navLink}>
              {!languageNow.ua ? "Prices" : "Ціни"}
            </NavLink>
          </li>
          <li className={styles.navItem} onClick={handleClick}>
            <NavLink to="contacts" className={styles.navLink}>
              {!languageNow.ua ? "Contacts" : "Контакти"}
            </NavLink>
          </li>
        </ul>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
