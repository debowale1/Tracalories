import React from "react";
import { Consumer } from "../context";

const Item = (props) => {
  const handleDeleteItem = (id, dispatch) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };
  const { id, calories, title } = props.item;
  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <li className="collection-item" id="item-0">
            <strong>{title}: </strong> <em>{calories} Calories</em>
            <div
              onClick={handleDeleteItem.bind(this, id, dispatch)}
              className="secondary-content"
            >
              <i
                style={{ marginLeft: "10px", color: "red", cursor: "pointer" }}
                className="fa fa-trash"
              ></i>
            </div>
            <div className="secondary-content">
              <i style={{ cursor: "pointer" }} className="fa fa-pencil"></i>
            </div>
          </li>
        );
      }}
    </Consumer>
  );
};

export default Item;
