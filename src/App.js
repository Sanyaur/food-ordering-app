import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModalHandler = () => setIsModalVisible(true);

  const hideModalHandler = () => setIsModalVisible(false);

  return (
    <CartProvider>
      {isModalVisible && <Cart onHideCart={hideModalHandler} />}
      <Header onShowCart={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
