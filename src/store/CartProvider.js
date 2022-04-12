import React, { useReducer } from "react";
import { CartContext } from "./cart-context";

const initialValue = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        // returns a brand new array which considered a better way of handling state (?)
        items: state.items.concat(action.item),
        // returns the previous amount, then adds the price as many times as the number of products in the basket.
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };

    default:
      return initialValue;
  }
};
const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const addItemToCartHandler = (item) => dispatch({ type: "ADD", item: item });

  const removeItemFromCartHandler = (id) =>
    dispatch({ type: "REMOVE", id: id });

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
