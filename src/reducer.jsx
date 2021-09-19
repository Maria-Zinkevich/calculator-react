export const initialState = {
  prevOp: 0,
  currOp: 0,
  operation: null,
  result: 0,
  displayString: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        operation: action.payload,
        prevOp: +state.prevOp + +state.currOp,
        currOp: 0,
        result: action.payload,
        displayString: state.displayString + action.payload,
      };
    case "subtract":
      return {
        ...state,
        operation: action.payload,
        prevOp:
          state.prevOp === 0 ? state.currOp : +state.prevOp - +state.currOp,
        currOp: 0,
        result: action.payload,
        displayString: state.displayString + action.payload,
      };
    case "multiply":
      if (state.operation === "=") {
        return {
          ...state,
          operation: action.payload,
          currOp: 0,
          prevOp: state.prevOp,
          result: action.payload,
          displayString: state.displayString + action.payload,
        };
      } else {
        return {
          ...state,
          operation: action.payload,
          currOp: state.currOp === 0 ? 1 : +state.prevOp * +state.currOp,
          prevOp:
            state.prevOp === 0 ? state.currOp : +state.prevOp * +state.currOp,
          result: action.payload,
          displayString: state.displayString + action.payload,
        };
      }

    case "divide":
      if (state.operation === "=") {
        return {
          ...state,
          operation: action.payload,
          currOp: 0,
          prevOp: state.prevOp,
          result: action.payload,
          displayString: state.displayString + action.payload,
        };
      } else {
        return {
          ...state,
          operation: action.payload,
          prevOp:
            state.prevOp === 0 ? state.currOp : state.prevOp / state.currOp,
          currOp: 0,
          result: action.payload,
          displayString: state.displayString + action.payload,
        };
      }

    case "number":
      return {
        ...state,
        currOp:
          state.currOp === 0 ? action.payload : state.currOp + action.payload,
        displayString: state.displayString + action.payload,
      };

    case "computing":
      let result = eval(state.prevOp + state.operation + state.currOp);
      return {
        ...state,
        operation: action.payload,
        prevOp: result,
        currOp: 0,
        result: result,
        displayString: result,
      };

    case "clear":
      return {
        ...state,
        prevOp: 0,
        currOp: 0,
        operation: null,
        result: 0,
        displayString: "",
      };

    default:
      return state;
  }
}
