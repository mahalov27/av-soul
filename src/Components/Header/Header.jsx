import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import listenerScroll from "../../services/listenerScroll";
import Toggle from "../Toggle/Toggle";
// import Auth from "../Auth/Auth";
import styles from "./header.module.css";

const Header = () => {
  const [fixedNavigation, setFixedNavigation] = useState(false);
  const [mobileNavigation, setMobileNovigation] = useState(false);
  const language = useSelector((state) => state.myLanguage);

  useEffect(() => {
    const value = 180;
    window.addEventListener("scroll", () =>
      setFixedNavigation(listenerScroll(value))
    );
  }, []);

  const handleClick = () => {
    const screenWidth = window.innerWidth;

    !mobileNavigation ? setMobileNovigation(true) : setMobileNovigation(false);
    if(screenWidth <= 555) {
      document.body.style.overflow = !mobileNavigation ? "hidden" : "auto";
    }
  };

  return (
    <header className={styles.header} >
      <div className={styles.logo}>
        <Link to="/">
          <img className={styles.logoImg} src={process.env.PUBLIC_URL + '/images/icons/Logo.png'} alt="logo" />
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
              {language === 'ua' ? "Про мене" : "About me"}
            </NavLink>
          </li>
          <li className={styles.navItem} onClick={handleClick}>
            <NavLink to="portfolio" className={styles.navLink}>
              {language === 'ua' ? "Портфоліо" : "Portfolio"}
            </NavLink>
          </li>
          <li className={styles.navItem} onClick={handleClick}>
            <NavLink to="services" className={styles.navLink}>
              {language === 'ua' ? "Послуги" : "Services"}
            </NavLink>
          </li>
          <li className={styles.navItem} onClick={handleClick}>
            <NavLink to="contacts" className={styles.navLink}>
              {language === 'ua' ? "Контакти" : "Contacts"}
            </NavLink>
          </li>
        </ul>
          <Toggle />
          {/* <Auth /> */}
      </div>
    </header>
  );
};

export default Header;
