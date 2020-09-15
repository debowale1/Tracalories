import React from "react";
import { Consumer } from "../context";
import Item from "./Item";

const List = () => {
  return (
    <Consumer>
      {(value) => {
        const { items } = value;
        return (
          <ul id="item-list" className="collection">
            {items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </ul>
        );
      }}
    </Consumer>
  );
};

export default List;
