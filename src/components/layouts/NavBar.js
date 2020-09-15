import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";

const NavBar = () => {
  const handleClearItems = (dispatch) => {
    dispatch({ type: "CLEAR_ALL_ITEMS" });
  };
  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <nav>
            <div className="nav-wrapper blue">
              <div className="container">
                <Link to="/" className="brand-logo center">
                  Tracalorie
                </Link>
                <ul className="right">
                  <li>
                    <button
                      onClick={handleClearItems.bind(this, dispatch)}
                      className="clear-btn btn blue lighten-3"
                    >
                      Clear All
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
      }}
    </Consumer>
  );
};

export default NavBar;
