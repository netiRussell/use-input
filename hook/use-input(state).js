import { useState } from "react";

function useInput(validateFn) {
  const [enteredValue, setEneteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateFn(enteredValue) && isTouched;
  const hasError = isTouched && !isValid;

  const valueChangeHandler = function (event) {
    setEneteredValue(event.target.value);
  };

  const valueBlurHandler = function () {
    setIsTouched(true);
  };

  const resetValue = function () {
    setEneteredValue("");
    setIsTouched(true);
  };

  /*
    Use "hasError" for interaction with user
    and "isValid" for the form validation
  */
  return {
    enteredValue,
    hasError,
    isValid,
    valueChangeHandler,
    valueBlurHandler,
    resetValue,
  };
}

export default useInput;
