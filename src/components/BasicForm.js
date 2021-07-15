import React from'react';
import useInput from'../hooks/use-input';
const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    valueInputBlur: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim !=='');
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameInputChangeHandler,
    valueInputBlur: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim !=='');
 
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputHandler,
    valueInputBlur: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim !== 0 && value.includes("@"));


let formIsValid=false;

if(enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid){
  formIsValid=true;
}





    
   const formSubmitHandler= (event)=>{
    event.preventDefault();
     
      if(!enteredName || !enteredEmail || !enteredLastName ){
        return;
      }
      console.log(enteredEmail);
      console.log(enteredLastName);
      console.log(enteredName);
     resetNameInput();
     resetEmailInput();
     resetLastNameInput();
   }


   const errorHandle = nameInputHasError
   ? "form-control invalid"
   : "form-control";
   
   const lastNameErrorHandle= lastNameInputHasError?"form-control invalid"
   : "form-control";

 const emailError = emailInputHasError
   ? "email-control invalid"
   : "email-control";





  return (
    <form onSubmit={formSubmitHandler}>
      <div className={errorHandle}>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'  onChange={nameInputChangeHandler} onBlur={nameBlurHandler} />
        </div>
        {nameInputHasError && <p className="error-text"> Enter A name</p>}
        <div className={lastNameErrorHandle}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameInputChangeHandler} onBlur={ lastNameBlurHandler} />
        </div>
        {lastNameInputHasError && <p className="error-text">enter last name</p>}
      </div>
      <div className={emailError}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailInputHandler} onBlur={emailBlurHandler} />
      </div>
      {emailInputHasError && <p className="error-text">enter email</p> }
      <div className='form-actions'>
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
