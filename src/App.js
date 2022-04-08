import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModalHandler = () => setIsModalVisible(true);

  const hideModalHandler = () => setIsModalVisible(false);

  return (
    <>
      {isModalVisible && <Cart onHideCart={hideModalHandler} />}
      <Header onShowCart={showModalHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
