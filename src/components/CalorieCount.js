import React from "react";
import { Consumer } from "../context";

const CalorieCount = () => {
  return (
    <Consumer>
      {(value) => {
        const { items } = value;
        const totalCalories = items.reduce(
          (acc, cur) => (acc += cur.calories),
          0
        );
        return (
          <h3 className="center-align">
            Total Calories:{" "}
            <span className="total-calories">{totalCalories}</span>
          </h3>
        );
      }}
    </Consumer>
  );
};

export default CalorieCount;
