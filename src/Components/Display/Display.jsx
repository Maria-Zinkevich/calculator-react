import styles from "../Display/display.module.css";

export const Display = ({ result }) => {
  return <div className={`${styles.display}`}>{result}</div>;
};
