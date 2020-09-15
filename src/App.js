import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/layouts/NavBar";
import AddItem from "./components/AddItem";
import CalorieCount from "./components/CalorieCount";
import List from "./components/List";
import { Provider } from "./context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <AddItem />
                  <CalorieCount />
                </Route>
              </Switch>
              <List />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
