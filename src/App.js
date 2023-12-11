import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

//Here we taken input data from Form and updated and added data by addDataHandler into new array and return that to data in useState by destructing so our updated and jaise jaise input aata jayega form se data me add hoga as array
//Then we passed data to List compo as items

const App = () => {
  const [data, setData] = useState([]); //if we use useState('') then this treat data as an string and in using map method in list component showing map fn is not defined because map is for array only, but below in addHandler fn we returned array so we have to pass array in useState([])

  const addDataHandler = (gotData) => {
    setData((prevdata) => {
      return [gotData, ...prevdata];
    });
  };
  return (
    <div>
      <Form showData={addDataHandler} />
      <List items={data} />
    </div>
  );
};

export default App;
