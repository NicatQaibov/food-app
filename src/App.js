import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
function App() {
  const [modalIsShown, setModalIsShown] = useState(false);

  const openModalHandler = function () {
    setModalIsShown(true);
  };

  const closeModalHandler = function () {
    setModalIsShown(false);
  };

  return (
    <CartProvider>
      {modalIsShown && (
        <Cart onOpenModal={openModalHandler} onCloseModal={closeModalHandler} />
      )}
      <Header onOpenModal={openModalHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
