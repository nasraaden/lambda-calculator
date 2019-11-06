import React from "react";
import { tsPropertySignature } from "@babel/types";

const OperatorButton = props => {

  // const handleClick = () => {
  // //   if (props.operator === "="){
  // //     props.equals();
  // //   } else {
  // //     props.test(props.operator);
  // //   }
  // // }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button> {props.operator.char} </button>
    </>
  );
};

export default OperatorButton;

