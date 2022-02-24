import React from "react";
import "./App.css";
import {Switch, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import { BrowserRouter } from "react-router-dom";
import ListPhones from "./views/ListPhones";
import SinglePhone from "./views/SinglePhone";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Switch>
        <Route path="/phones/:id" component={SinglePhone} />
        <Route path="/phones" component={ListPhones} />
        <Route exact path="/" component={HomePage} />
   </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
