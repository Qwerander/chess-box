import { ReactComponent as LogoSvg } from "../../img/logo.svg";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerBlock}>
          <LogoSvg />
          <button className={styles.btn} onClick={() => {}}>
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
};
