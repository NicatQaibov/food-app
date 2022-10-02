import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = function (props) {
  const [btnIsHiglighted, setBtnIsHiglighted] = useState(false);

  const cartContext = useContext(CartContext);
  const { items } = cartContext;

  const numberOfCartItems = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHiglighted(true);

    const timer = setTimeout(() => {
      setBtnIsHiglighted(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [items]);

  const btnClasses = `${classes["cart-button"]} ${
    btnIsHiglighted ? classes["bump"] : ""
  }`;
  return (
    <button className={btnClasses} onClick={props.onOpen}>
      <CartIcon />
      <div className={classes["cart-text"]}>your cart</div>
      <div className={classes["cart-badge"]}>{numberOfCartItems}</div>
    </button>
  );
};
export default HeaderCartButton;
