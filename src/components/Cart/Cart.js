import React, { useContext } from "react";
import MealItems from "../Meals/MealItems/MealItems";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = function (props) {
  const cartCtx = useContext(CartContext);

  const addCartItemHandler = function (item) {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeCartItemHandler = function (id) {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          amount={item.amount}
          price={item.price}
          name={item.name}
          onRemove={removeCartItemHandler.bind(null, item.id)}
          onAdd={addCartItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;
  return (
    <Modal onClose={props.onCloseModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{`$${totalAmount}`}</span>
      </div>

      <div className={classes.actions}>
        <button
          className={`${classes["button--alt"]} ${classes["button"]}`}
          onClick={props.onCloseModal}
        >
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
