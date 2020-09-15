import React, { Component } from "react";
import { Consumer } from "../context";

class AddItem extends Component {
  state = {
    title: "",
    calories: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddItem = (title, calories, dispatch) => {
    const newItem = {
      id: Math.floor(Math.random() * 1000000),
      title,
      calories: +calories,
    };

    dispatch({ type: "ADD_ITEM", payload: newItem });

    //clear fields
    this.setState({
      title: "",
      calories: "",
    });
  };
  render() {
    const { title, calories } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card">
              <div className="card-content">
                <span className="card-title">Add Meal / Food Item</span>
                {/* <form className="col"> */}
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      type="text"
                      placeholder="Add Item"
                      name="title"
                      value={title}
                      onChange={this.onChange}
                    />
                    <label htmlFor="item-name">Meal</label>
                  </div>
                  <div className="input-field col s6">
                    <input
                      type="number"
                      placeholder="Add Calories"
                      name="calories"
                      value={calories}
                      onChange={this.onChange}
                    />
                    <label htmlFor="item-calories">Calories</label>
                  </div>
                  <button
                    onClick={this.handleAddItem.bind(
                      this,
                      title,
                      calories,
                      dispatch
                    )}
                    className="add-btn btn blue darken-3"
                  >
                    <i className="fa fa-plus"></i> Add Meal
                  </button>

                  {/* <button className="update-btn btn orange">
                <i className="fa fa-pencil-square-o"></i> Update Meal
              </button>
              <button className="delete-btn btn red">
                <i className="fa fa-remove"></i> Delete Meal
              </button> */}

                  <button className="back-btn btn grey pull-right">
                    <i className="fa fa-chevron-circle-left"></i> Back
                  </button>
                </div>
                {/* </form> */}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddItem;
