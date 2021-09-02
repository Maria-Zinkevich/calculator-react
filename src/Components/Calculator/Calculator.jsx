import { Keypad } from "../Keypad/Keypad";
import { Display } from "../Display/Display";
import { useState } from "react";
import styles from "../Calculator/calculator.module.css";

export const Calculator = () => {
  const [result, setResult] = useState(0);
  return (
    <div className={`${styles.calculator}`}>
      <Display result={result} />
      <Keypad setResult={setResult} />
    </div>
  );
};
