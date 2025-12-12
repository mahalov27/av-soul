import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./PackageDetails.module.css";

const PackageDetails = ({ details, className }) => {
  const [isActive, setIsActive] = useState(false);
  const language = useSelector((state) => state.myLanguage);

  return (
    <div
      className={`${styles.wrapper} ${className ? className : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      {isActive && (
        <ul>
          {details.map((item) => {
            return <li key={item.id}>{item.text[language]}</li>;
          })}
        </ul>
      )}
     {!isActive && <button onClick={() => setIsActive(!isActive)}>
        {language === "ua" ? "Детальніше..." : "More..."}
      </button>}
    </div>
  );
};

export default PackageDetails;
