import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id, onAddToCart }) => {
  const [isAmountValid, setIsAmountValid] = useState(true);

  const inputAmountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    // gets input field value; its always a STRING even if the "type: number" on the input attribute
    const enteredAmount = inputAmountRef.current.value;
    // "+" converts string to number (sneaky trick)
    const enteredAmountNumber = +enteredAmount;

    // basic validation
    if (
      // if no value added in input field
      enteredAmount.trim().length === 0 ||
      // if value is 0
      enteredAmountNumber < 1 ||
      // if value is more than 5
      enteredAmountNumber > 5
    ) {
      // this prevets the function to run
      setIsAmountValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
        label='Amount'
        input={{
          id: `amount_${id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!isAmountValid && <div style={{ color: "red" }}>Amount is invalid!</div>}
    </form>
  );
};

export default MealItemForm;
