import { useEffect } from "react";
import styles from "../Keypad/keypad.module.css";
import { useResultValue, useValue } from "../../Contex";

export const Keypad = () => {
  const result = useValue();
  const resultContext = useResultValue();

  useEffect(() => {
    resultContext.setResult(result.state.displayString);
  });

  return (
    <div className={`${styles.keypad}`}>
      <button
        onClick={() => result.dispatch({ type: "number", payload: "7" })}
        value={7}
      >
        7
      </button>
      <button
        onClick={() => result.dispatch({ type: "number", payload: "8" })}
        value={8}
      >
        8
      </button>
      <button
        onClick={() => result.dispatch({ type: "number", payload: "9" })}
        value={9}
      >
        9
      </button>
      <button
        onClick={() => result.dispatch({ type: "divide", payload: "/" })}
        value={"/"}
      >
        /
      </button>
      <button
        onClick={() => result.dispatch({ type: "number", payload: "4" })}
        value={4}
      >
        4
      </button>
      <button
        onClick={() => result.dispatch({ type: "number", payload: "5" })}
        value={5}
      >
        5
      </button>
      <button
        onClick={() => result.dispatch({ type: "number", payload: "6" })}
        value={6}
      >
        6
      </button>
      <button
        onClick={() => result.dispatch({ type: "multiply", payload: "*" })}
        value={"*"}
      >
        *
      </button>

      <button
        onClick={() => result.dispatch({ type: "number", payload: "1" })}
        value={1}
      >
        1
      </button>
      <button
        onClick={() => result.dispatch({ type: "number", payload: "2" })}
        value={2}
      >
        2
      </button>
      <button
        onClick={() => result.dispatch({ type: "number", payload: "3" })}
        value={3}
      >
        3
      </button>
      <button
        onClick={() => result.dispatch({ type: "subtract", payload: "-" })}
        value={"-"}
      >
        -
      </button>
      <button
        onClick={() => result.dispatch({ type: "number", payload: "0" })}
        value={0}
      >
        0
      </button>

      <button
        onClick={() => result.dispatch({ type: "clear", payload: "C" })}
        value={"C"}
      >
        C
      </button>

      <button
        onClick={() => result.dispatch({ type: "computing", payload: "=" })}
        value={"="}
      >
        =
      </button>
      <button
        onClick={() => result.dispatch({ type: "add", payload: "+" })}
        value={"+"}
      >
        +
      </button>
    </div>
  );
};
