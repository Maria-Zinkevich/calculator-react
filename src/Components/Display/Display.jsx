import styles from "../Display/display.module.css";
import { useResultValue } from "../../Context";

export const Display = () => {
  const resultContext = useResultValue();
  return <div className={`${styles.display}`}>{resultContext.result}</div>;
};
