import { useDispatch, useSelector } from "react-redux";
import { language } from "../../../redux/language/languageSlice";
import styles from "./Toggle.module.css";

const Toggle = () => {
  const languageNow = useSelector((state) => state.myLanguage);
  const dispatch = useDispatch();

  const actionToggle = () => {
    const langNext = languageNow.ua
      ? { ua: false, eng: true }
      : { ua: true, eng: false };
    dispatch(language(langNext));
    localStorage.setItem("language", JSON.stringify(langNext));
  };

  return (
    <div className={styles.toggleBlock}>
      <span
        className={styles.optionName + " " + (languageNow.eng && styles.active)}
      >
        eng
      </span>
      <div className={styles.toggle}>
        <div
          className={
            styles.toggleBtn +
            " " +
            (languageNow.ua && styles.togglePositionTwo)
          }
          onClick={actionToggle}
        ></div>
      </div>
      <span
        className={styles.optionName + " " + (languageNow.ua && styles.active)}
      >
        ua
      </span>
    </div>
  );
};

export default Toggle;
