import styles from "../Display/display.module.css";
import { useResultValue } from "../../Contex";

export const Display = () => {
  const resultContext = useResultValue();
  return <div className={`${styles.display}`}>{resultContext.result}</div>;
};
