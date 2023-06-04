import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Card } from "../card/Card";
import styles from "./cardsList.module.css";
import { cardsAsync } from "../../store/reducers/cardsSlice";

export const CardsList = () => {
  const dispatch = useAppDispatch();
  const { loading, cards } = useAppSelector((state) => state.cards);

  useEffect(() => {
    dispatch(cardsAsync());
  }, [dispatch]);

  return (
    <ul className={styles.list}>
      {loading ? (
        <div className={styles.load}>Loading</div>
      ) : (
        cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            description={card.description}
            isParticipate={card.isParticipate}
            people={card.people}
            price={card.price}
            startTime={card.startTime}
            title={card.title}
          />
        ))
      )}
    </ul>
  );
};
