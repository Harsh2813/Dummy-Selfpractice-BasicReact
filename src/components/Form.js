import React, { useState, useRef } from "react";// We used useRef and state both in this but commented useRef as it 
import ErrorModal from "./UI/ErrorModal";// should Rarely used for change DOM, just for reading input we can use
import "./Form.css";// but for resetting or changing we should use useState even it has little more code than ref

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

  // const nameRef = useRef();// Now we are using useRef instead of useState because it not re-render after updated
  // const ageRef = useRef();// but use useRef RARELY for changing DOM 

  const FormSubmitHandler = (event) => {
    event.preventDefault();

    // let enteredName = nameRef.current.value;
    // let enteredAge = ageRef.current.value;

    if(name.trim().length === 0 && age.trim().length === 0){
    // if(enteredName.trim().length === 0 && enteredAge.trim().length === 0){

      setError({ // if name and age is empty then we set error's title and message 
        title: 'Invalid name',
        message: 'please enter a valid name and age(non-empty values)',
      })
      return;
    }
    if(age < 1 /*enteredAge < 1*/){// and if age is negative entered then we set title and message and passed to ErrorModal compo
      setError({
        title: 'Invalid age',
        message: 'please enter a valid age and age(non-negative values)',
      })
      return;
    }
    const data = {
      // name: enteredName,
      // age: enteredAge,
      name: name,
      age: age,
      id: Math.random().toString(),
    };
    props.showData(data);
    // nameRef.current.value = ''; // Resetted values using Ref
    // ageRef.current.value = '';
    setName('');
    setAge('')//resetted using state
  };

  const closeErrorHandler = () => {
    setError(null); // Reset the error state to null if okey button clicks of Error modal
  };

  return (
    <div>
      {error && <ErrorModal title= {error.title} message= {error.message} onConfirm={closeErrorHandler}/>/* if something sets to error then ErrorModal compo will call by passing error's details. */}
      <form onSubmit={FormSubmitHandler}>
        <div>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" value={name} onChange={enteredUserNameHandler}></input>
          {/*<input id="username" type="text" ref={nameRef}></input>{/**this ref is built in useRef props used in place of useState}*/}
        </div>
        <div>
          <label for="age">Age(Years)</label>
          <input id="age" type="number" value={age} onChange={enteredAgeHandler}></input>

          {/*<input id="age" type="number" ref={ageRef}></input> in place of onChange we used ref props because it tracks the input and after entering full input it stores to nameRef and ageRef after submitng form ulike state useRef don't re render for perstate change or per keystroke*/}
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
//Note -  a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state like useRef wehen the user inputs ref takes the input and set to useRef varaible even we are using React's hook ref but it is not fully controlled when we resetting the value it don't use React. but useState is controlled for every keystroke and for resetting the input also we use state react.