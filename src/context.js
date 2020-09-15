import React, { Component } from "react";

//create context
const Context = React.createContext();

//reducers
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_ALL_ITEMS":
      return {
        ...state,
        items: state.items.splice(0, state.items.length),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Steak",
        calories: 75,
      },
      {
        id: 2,
        title: "Doughnut",
        calories: 500,
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
