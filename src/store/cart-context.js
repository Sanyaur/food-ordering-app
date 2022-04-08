const { createContext } = require("react");

// object added to createContext for better autofill in components
export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
