import React, { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";

const Meals = function () {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeals />
    </Fragment>
  );
};
export default Meals;
