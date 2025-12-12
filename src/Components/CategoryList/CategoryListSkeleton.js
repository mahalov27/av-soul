import styles from "./CategoryListSkeleton.module.css";

const CategoryListSkeleton = () => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={styles.block}
        ></div>
      ))}
    </div>
  );
};

export default CategoryListSkeleton;
