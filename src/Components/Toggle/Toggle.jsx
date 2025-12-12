import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/language/languageSlice";
import styles from "./Toggle.module.css";

const Toggle = () => {
  const languageNow = useSelector((state) => state.myLanguage);
  const dispatch = useDispatch();
  const currentLanguage = localStorage.getItem("language");
  
  useEffect(()=>{
    dispatch(setLanguage(currentLanguage ? currentLanguage : "ua"));
  }, [dispatch, currentLanguage])

  const actionToggle = () => {
    const langNext = languageNow === 'ua'
      ? 'eng'
      : 'ua';
    dispatch(setLanguage(langNext));
    localStorage.setItem("language", langNext);
  };

  return (
    <div className={styles.toggleBlock}>
      <span
        className={styles.optionName + " " + (languageNow === 'eng' && styles.active)}
      >
        eng
      </span>
      <div className={styles.toggle} onClick={actionToggle}>
        <div
          className={
            styles.toggleBtn +
            " " +
            (languageNow === 'ua' && styles.togglePositionTwo)
          }
          
        ></div>
      </div>
      <span
        className={styles.optionName + " " + (languageNow === 'ua' && styles.active)}
      >
        ua
      </span>
    </div>
  );
};

export default Toggle;
