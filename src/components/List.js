import React from "react";
import Items from "./Items";
import "./List.css";

// By taking data as items from App we looped by map method so for each index object of array or per input we called Items and passed props by adding key and all this props is under ul so that for per input we can create li
const List = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((data) => {
          return <Items key={data.id} name={data.name} age={data.age} />;
        })}
      </ul>
    </div>
  );
};

export default List;
