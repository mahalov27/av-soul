import { useSelector } from "react-redux";
import attentionPriceFeed from "../../../json/attentionPriceFeed.json";
import styles from "./AttentionPrices.module.css";

const AttentionPrices = () => {
  const language = useSelector((state) => state.myLanguage);

  return (
    <div className={styles.listBlock}>
      <ul className={styles.list}>
        {attentionPriceFeed.map((item) => (
          <li key={item.id} className={styles.listItem}>
            {item.text[language]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttentionPrices;
