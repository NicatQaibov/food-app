import React from "react";
import classes from "./CartItem.module.css";
const CartItem = function (props) {
  return (
    <div className={classes["cart-item"]}>
      <div className={classes["cart-item__left-side"]}>
        <div className={classes["cart-item__name"]}>{props.name}</div>

        <div className={classes["cart-item__info"]}>
          <div className={classes["cart-item__price"]}>
            {`$${props.price.toFixed(2)}`}
          </div>
          <div
            className={classes["cart-item__amount"]}
          >{`x${props.amount}`}</div>
        </div>
      </div>

      <div className={classes["cart-item__right-side"]}>
        <button className={classes["cart-item__btn"]} onClick={props.onAdd}>
          +
        </button>
        <button className={classes["cart-item__btn"]} onClick={props.onRemove}>
          -
        </button>
      </div>
    </div>
  );
};
export default CartItem;
