import React, {useState} from "react";

//import any components needed
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file



const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div className="operator">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {operatorState.map((operator, index) => (
      <OperatorButton key={index} operator={operator} />
      ))}
    </div>
  );
};

export default Operators;

