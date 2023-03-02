import useInput from "../hook/use-input";

const SimpleInput = (props) => {
  const { enteredValue: enteredName, isValid: nameIsValid, hasError: nameHasError, valueChangeHandler: nameChangeHandler, valueBlurHandler: nameBlurHandler, resetValue: resetName } = useInput((value) => value.trim() !== "");

  const { enteredValue: enteredEmail, isValid: emailIsValid, hasError: emailHasError, valueChangeHandler: emailChangeHandler, valueBlurHandler: emailBlurHandler, resetValue: resetEmail } = useInput((value) => value.trim() !== "");

  const formIsValid = nameIsValid && emailIsValid;
  console.log(nameIsValid);

  const submissionHandler = function (event) {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    console.log(enteredName, enteredEmail);

    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={submissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameChangeHandler} value={enteredName} onBlur={nameBlurHandler} style={nameHasError ? { backgroundColor: " 	rgb(238, 75, 100, 0.3)" } : {}} />
        {nameHasError && <p style={{ color: "rgb(238, 40, 30)" }}>Name is invalid</p>}
      </div>

      <div className="form-control">
        <label htmlFor="name">Your Email</label>
        <input type="text" id="name" onChange={emailChangeHandler} value={enteredEmail} onBlur={emailBlurHandler} style={emailHasError ? { backgroundColor: " 	rgb(238, 75, 100, 0.3)" } : {}} />
        {emailHasError && <p style={{ color: "rgb(238, 40, 30)" }}>Email is invalid</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
