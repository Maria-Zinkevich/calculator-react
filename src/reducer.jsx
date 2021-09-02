export const initialState = {
  prevOp: 0,
  currOp: 0,
  operation: null,
  result: 0,
};

export function reducer(state, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "add":
      return {
        ...state,
        operation: action.payload,
        prevOp: +state.prevOp + +state.currOp,
        currOp: 0,
        result: action.payload,
      };
    case "subtract":
      return {
        ...state,
        operation: action.payload,
        prevOp: state.prevOp - state.currOp,
        currOp: 0,
        result: action.payload,
      };
    case "multiply":
      return {
        ...state,
        operation: action.payload,
        prevOp: state.prevOp * state.currOp,
        currOp: 0,
        result: action.payload,
      };
    case "divide":
      return {
        ...state,
        operation: action.payload,
        prevOp: state.prevOp / state.currOp,
        currOp: 0,
        result: action.payload,
      };

    case "number":
      return {
        ...state,
        currOp: +state.currOp + +action.payload,
        result:
          state.currOp === 0 ? action.payload : state.result + action.payload,
      };

    case "computing":
      console.log(state, action);
      return {
        ...state,
        prevOp: eval(state.prevOp + state.operation + +state.currOp),
        result: eval(state.prevOp + state.operation + +state.currOp),
      };

    case "clear":
      return {
        ...state,
        prevOp: 0,
        currOp: 0,
        operation: null,
        result: 0,
      };

    default:
      return state;
  }
}
