import { createContext, useContext, useReducer } from "react";
import { useState } from "react/cjs/react.development";
import { initialState, reducer } from "./reducer";

export const CalculatorContext = createContext();
export const Provide = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useValue = () => {
  const value = useContext(CalculatorContext);
  return value;
};

export const ResultContext = createContext();
export const ResultProvide = ({ children }) => {
  const [result, setResult] = useState(0);
  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultValue = () => {
  const resultValue = useContext(ResultContext);
  return resultValue;
};
