import styles from "./timeValueBlock.module.css";

interface ITimeValueBlock {
  timeValueType: "Days" | "Hours" | "Minutes";
  timeValue: number;
}

export const TimeValueBlock = ({
  timeValue,
  timeValueType,
}: ITimeValueBlock) => {
  return (
    <div className={styles.timeBlock}>
      <span className={styles.value}>{timeValue}</span>
      <span className={styles.type}>{timeValueType}</span>
    </div>
  );
};
