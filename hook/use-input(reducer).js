import { useReducer } from "react";

const reduceFn = function (prevValue, actionValue) {
  switch (actionValue.type) {
    case "set_entered":
      return { enteredValue: actionValue.payload, isTouched: prevValue.isTouched };

    case "set_touched":
      return { enteredValue: prevValue.enteredValue, isTouched: actionValue.payload };

    case "reset":
      return { enteredValue: "", isTouched: false };

    default:
      console.log("no such thing");
  }
};

function useInput(validateFn) {
  const [reducer, dispatchFn] = useReducer(reduceFn, { enteredValue: "", isTouched: false });

  const isValid = validateFn(reducer.enteredValue) && reducer.isTouched;
  const hasError = reducer.isTouched && !isValid;

  /*
    Use "hasError" for interaction with user
    and "isValid" for the form validation
  */
  return {
    enteredValue: reducer.enteredValue,
    hasError,
    isValid,
    valueChangeHandler: (event) => {
      dispatchFn({ type: "set_entered", payload: event.target.value });
    },
    valueBlurHandler: () => {
      dispatchFn({ type: "set_touched", payload: true });
    },
    resetValue: () => {
      dispatchFn({ type: "reset" });
    },
  };
}

export default useInput;
