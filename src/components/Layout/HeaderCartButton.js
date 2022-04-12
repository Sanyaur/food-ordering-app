import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { CartContext } from "../../store/cart-context";

export const HeaderCartButton = (props) => {
  const { button, icon, badge } = classes;

  const { items } = useContext(CartContext);

  const totalItemNumber = items.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    0
  );

  return (
    <button className={button} onClick={props.onShowCart}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={badge}>{totalItemNumber}</span>
    </button>
  );
};
