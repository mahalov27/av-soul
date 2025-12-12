import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./AttentionPrices.module.css";

const AttentionPrices = ({list}) => {
  const language = useSelector((state) => state.myLanguage);

  const parseText = (text) => {
    const parts = text.split(/(<NavLink to='[^']+'>[^<]+<\/NavLink>)/g);
    return parts.map((part, index) => {
      const match = part.match(/<NavLink to='([^']+)'>([^<]+)<\/NavLink>/);
      if (match) {
        return (
          <NavLink key={index} to={match[1]}>
            {match[2]}
          </NavLink>
        );
      }
      return part;
    });
  };

  return (
    <div className={styles.listBlock}>
      <ul className={styles.list}>
        {list.map((item) => (
          <li key={item.id} className={styles.listItem}>
            {parseText(item.text[language])}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttentionPrices;
