import React, { useState } from "react";
import ErrorModal from "./UI/ErrorModal";
import "./Form.css";

// In this component we taken input make form and pass input object data to App by making inputs to object through props.showData fn

const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState()// used this state if any error sets then we will pop up

  const enteredUserNameHandler = (event) => {
    setName(event.target.value);
  };

  const enteredAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    if(name.trim().length === 0 && age.trim().length === 0){
      setError({ // if name and age is empty then we set error's title and message 
        title: 'Invalid name',
        message: 'please enter a valid name and age(non-empty values)',
      })
      return;
    }
    if(age < 1){// and if age is negative entered then we set title and message and passed to ErrorModal compo
      setError({
        title: 'Invalid age',
        message: 'please enter a valid age and age(non-negative values)',
      })
      return;
    }
    const data = {
      name: name,
      age: age,
      id: Math.random().toString(),
    };
    props.showData(data);
    setName('');
    setAge('')
  };

  const closeErrorHandler = () => {
    setError(null); // Reset the error state to null if okey button clicks of Error modal
  };

  return (
    <div>
      {error && <ErrorModal title= {error.title} message= {error.message} onConfirm={closeErrorHandler}/>/* if something sets to error then ErrorModal compo will call by passing error's details. */}
      <form onSubmit={FormSubmitHandler}>
        <div>
          <label for="username">UserName</label>
          <input id="username" type="text" value={name} onChange={enteredUserNameHandler}></input>
        </div>
        <div>
          <label for="age">Age(Years)</label>
          <input id="age" type="number" value={age} onChange={enteredAgeHandler}></input>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
