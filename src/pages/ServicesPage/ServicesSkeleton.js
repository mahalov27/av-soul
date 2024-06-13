import React from "react";
import styles from "./ServicesSkeleton.module.css";

const ServicesSkeleton = () => {

  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={styles.block}
        ></div>
      ))}
    </>
  );
};

export default ServicesSkeleton;
