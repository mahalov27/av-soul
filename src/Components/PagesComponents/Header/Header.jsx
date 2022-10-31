import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import listenerScroll from "../../services/listenerScroll";
import styles from "./header.module.css";

const Header = () => {
  const [fixedNavigation, setFixedNavigation] = useState(false);
  const [mobileNavigation, setMobileNovigation] = useState(false);

  useEffect(() => {
    const value = 180;
    window.addEventListener("scroll", () =>
      setFixedNavigation(listenerScroll(value))
    );
  }, []);

  const handleClick = () => {
    !mobileNavigation ? setMobileNovigation(true) : setMobileNovigation(false);
  };

  return (
    <header className={styles.header} id="up-page">
      <div className={styles.logo}>
        <Link className={styles.logoLink} to="/">
          <img className={styles.logoImg} src="./icons/Logo.png" alt="logo" />
        </Link>
      </div>
      <div className={styles.navMobile} onClick={handleClick}>
        <div className={styles.navHamburger  + ' ' + (mobileNavigation && styles.navHamburgerActive)}></div>
      </div>
      <ul
        className={
          styles.navList +
          " " +
          (fixedNavigation && styles.navFixed) +
          " " +
          (mobileNavigation && styles.navListActive)
        }
      >
        <li className={styles.navItem} onClick={handleClick}>
          <NavLink to="/" className={styles.navLink} end>
            About me
          </NavLink>
        </li>
        <li className={styles.navItem} onClick={handleClick}>
          <NavLink to="portfolio" className={styles.navLink}>
            Portfolio
          </NavLink>
        </li>
        <li className={styles.navItem} onClick={handleClick}>
          <NavLink to="prices" className={styles.navLink}>
            Prices
          </NavLink>
        </li>
        <li className={styles.navItem} onClick={handleClick}>
          <NavLink to="contacts" className={styles.navLink}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
