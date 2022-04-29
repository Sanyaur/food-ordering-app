import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { CartContext } from "../../store/cart-context";

export const HeaderCartButton = (props) => {
  const [buttonHighlight, setButtonHighlight] = useState(false);

  const { button, icon, badge, bump } = classes;
  const { items } = useContext(CartContext);

  const totalItemNumber = items.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    0
  );

  const buttonClasses = `${button} ${buttonHighlight && bump}`;
  useEffect(() => {
    console.log(items.length);
    items.length > 0 && setButtonHighlight(true);

    const timer = setTimeout(() => {
      setButtonHighlight(false);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onShowCart}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={badge}>{totalItemNumber}</span>
    </button>
  );
};
