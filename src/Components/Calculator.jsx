import { Keypad } from "./Keypad";
import { Display } from "./Display";
import { useState } from "react";

export const Calculator = () => {
  const [result, setResult] = useState(0);
  return (
    <div>
      <Display result={result} />
      <Keypad setResult={setResult} />
    </div>
  );
};
