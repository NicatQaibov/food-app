import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = function (props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes["header-title"]}>ReactMeals</h1>
        <HeaderCartButton onOpen={props.onOpenModal} />
      </header>
      <div className={classes["header-img"]}>
        <img src={mealsImage} alt="a table full of delicious food" />
      </div>
    </Fragment>
  );
};
export default Header;
