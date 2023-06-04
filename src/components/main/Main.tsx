import { CardsList } from "../cardsList/CardsList";
import { TitleBlock } from "../titleBlock/TitleBlock";
import styles from "./main.module.css";

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          <TitleBlock />
          <CardsList />
        </div>
      </div>
    </main>
  );
};
