import styles from "./card.module.css";
import { ReactComponent as PriceSvg } from "../../img/price.svg";
import { ReactComponent as PeopleSvg } from "../../img/people.svg";
import { TimeValueBlock } from "./timeValueBlock/TimeValueBlock";
import { ICard, participate } from "../../store/reducers/cardsSlice";
import { getTimeUntil } from "../../helpers/getTimeUntil";
import { useAppDispatch } from "../../store/hooks";

export const Card = ({
  id,
  title,
  description,
  isParticipate,
  people,
  price,
  startTime,
}: ICard) => {
  const dispatch = useAppDispatch();

  const { days, hours, minutes } = getTimeUntil(startTime);

  const handleClick = () => {
    dispatch(participate({ id }));
  };

  return (
    <li className={styles.card}>
      <div className={styles.left}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.startTime}>
          Starts At {startTime} (Moscow time)
        </span>
      </div>
      <div className={styles.center}>
        <p className={styles.descr}>{description}</p>
        <div className={styles.wrapper}>
          <span className={styles.info}>
            <PriceSvg />
            Price: {price}$
          </span>
          <span className={styles.info}>
            <PeopleSvg />
            {people} participants enrolled
          </span>
        </div>
      </div>
      {isParticipate ? (
        <div className={styles.right}>
          <div className={styles.isParticipate}>
            <h3 className={styles.subTitle}>You are participant!</h3>
          </div>
        </div>
      ) : (
        <div className={styles.right}>
          <h3 className={`${styles.subTitle} ${styles.register}`}>
            Registration ends in:
          </h3>
          <div className={styles.endTime}>
            <TimeValueBlock timeValue={days} timeValueType="Days" />
            <TimeValueBlock timeValue={hours} timeValueType="Hours" />
            <TimeValueBlock timeValue={minutes} timeValueType="Minutes" />
          </div>
          <button onClick={handleClick} className={styles.btn}>
            Participate
          </button>
        </div>
      )}
    </li>
  );
};
