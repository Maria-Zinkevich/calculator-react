export const initialState = {
  prevOp: "",
  currOp: "",
  operation: "",
  result: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case "operation":
      return {
        ...state,
        operation: action.payload,
        prevOp: eval(state.prevOp + state.operation + state.currOp),
        currOp: "",
        result: eval(state.prevOp + state.operation + state.currOp),
        result: action.payload,
      };

    case "number":
      return {
        ...state,
        currOp: state.currOp + action.payload,
        result: action.payload,
      };

    case "computing":
      return {
        ...state,
        currOp: "",
        prevOp: eval(state.prevOp + state.operation + state.currOp),
        result: eval(state.prevOp + state.operation + state.currOp),
        prevOp: "",
      };

    case "clear":
      return {
        ...state,
        prevOp: "",
        currOp: "",
        operation: "",
        result: 0,
      };

    default:
      return state;
  }
}
