import React, {useState} from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import Budget from "./pages/Budget.js";
import Stocks from "./pages/Stocks.js";
//App JS is a wrapper so all components get rendered in here

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" activeStyle={{color:"blue"}} exact component={Home}/> 
          <Route path="/budget"  activeStyle={{color:"blue"}} component={Budget}/> 
          <Route path="/stocks"  activeStyle={{color:"blue"}} component={Stocks}/>
        </Switch>
      </Router>
    </div>
  
  )
}


export default App;
