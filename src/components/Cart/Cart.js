import React, { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const { items, totalAmount } = useContext(CartContext);
  console.log(...items);

  const hasItems = items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[...items].map((item) => (
        <li key={item.id}>
          {item.name} <br /> price: {item.price} <br /> amount: {item.amount}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {hasItems ? cartItems : <i>your cart is currently empty.</i>}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{hasItems ? `$${totalAmount.toFixed(2)}` : "$0"}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
