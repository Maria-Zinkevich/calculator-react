import { Keypad } from "../Keypad/Keypad";
import { Display } from "../Display/Display";
import styles from "../Calculator/calculator.module.css";
import { useResultValue } from "../../Contex";

export const Calculator = () => {
  const resultFromContex = useResultValue();
  return (
    <div className={`${styles.calculator}`}>
      <Display result={resultFromContex.result} />
      <Keypad />
    </div>
  );
};
