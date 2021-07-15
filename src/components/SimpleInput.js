import React from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    valueInputBlur: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim !=='');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputHandler,
    valueInputBlur: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim !== 0 && value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    resetNameInput();
    resetEmailInput();
  };

  const errorHandle = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailError = emailInputHasError
    ? "email-control invalid"
    : "email-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={errorHandle}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputHasError && <p className="error-text"> Enter a name </p>}
      <div className={emailError}>
        <label htmlFor="email">your e-mail</label>
        <br></br>
        <input
          type="text"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        ></input>
      </div>
      {emailInputHasError && <p className="error-text"> Enter a name </p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;
