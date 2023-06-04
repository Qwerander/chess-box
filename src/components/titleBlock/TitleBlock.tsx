import styles from "./titleBlock.module.css";

export const TitleBlock = () => {
  return (
    <div className={styles.titleBlock}>
      <div className="container">
        <h1 className={styles.title}>
          Competitions <span>Rating</span>
        </h1>
      </div>
    </div>
  );
};
