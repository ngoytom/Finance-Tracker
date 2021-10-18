import React from "react";
import Header from "./components/Header/Header.js";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import Budget from "./pages/Budget.js";
import Transactions from "./pages/Transaction.js";
//App JS is a wrapper so all components get rendered in here

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" activeStyle={{color:"blue"}} exact component={Home}/> 
          <Route path="/budget" activeStyle={{color:"blue"}} component={Budget}/> 
          <Route path="/transactions" activeStyle={{color:"blue"}} component={Transactions}/>
        </Switch>
      </Router>
    </div>
  
  )
}


export default App;
