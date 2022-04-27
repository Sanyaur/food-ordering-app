import React, { useReducer } from "react";
import { CartContext } from "./cart-context";

const initialValue = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      // checks if the product is already existing in the cart, and increment the amount of it
      if (existingCartItem) {
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      return {
        ...state,
        // returns the previous amount, then adds the price as many times as the number of products in the basket.
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.amount,
        // returns a brand new array which considered a better way of handling state (?)
        items: updatedItems,
      };

    default:
      return initialValue;
  }
};
const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const addItemToCartHandler = (item) =>
    dispatch({ type: "ADD", payload: item });

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
