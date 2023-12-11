import React from "react";
import "./Items.css";

// Here we taken props from List and make li for every arrya index of object or per input because in List we make ul so inside ul our this Item component is rendering for every input so li is created for per input
const Items = (props) => {
  return (
    <div>
      <li>
        <h3>{`${props.name} (${props.age} Years Old)`}</h3>
      </li>
    </div>
  );
};

export default Items;
