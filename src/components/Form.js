import React, { useState } from "react";
import "./Form.css";

// In this component we taken input make form and pass input object data to App by making inputs to object through props.showData fn

const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const enteredUserNameHandler = (event) => {
    setName(event.target.value);
  };

  const enteredAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      age: age,
      id: Math.random().toString(),
    };
    props.showData(data);
  };

  return (
    <div>
      <form onSubmit={FormSubmitHandler}>
        <div>
          <label for="username">UserName</label>
          <input
            id="username"
            type="text"
            onChange={enteredUserNameHandler}
          ></input>
        </div>
        <div>
          <label for="age">Age(Years)</label>
          <input id="age" type="number" onChange={enteredAgeHandler}></input>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
