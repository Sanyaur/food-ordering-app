import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

export const HeaderCartButton = (props) => {
  const { button, icon, badge } = classes;
  return (
    <button className={button}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={badge}>X</span>
    </button>
  );
};
