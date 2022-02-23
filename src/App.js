import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import { BrowserRouter } from "react-router-dom";
import ListPhones from "./views/ListPhones";
import SinglePhone from "./views/SinglePhone";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
  
        <Route path="/phones/:id" component={SinglePhone} />
        <Route path="/phones" component={ListPhones} />
        <Route exact path="/" component={HomePage} />

      </BrowserRouter>
    </div>
  );
}

export default App;
