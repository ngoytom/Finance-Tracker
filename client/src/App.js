import React, { useContext, useEffect } from "react";
import { TransactionTrackerContext } from './context/context';
import Header from "./components/Header/Header.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Budget from "./pages/Budget.js";
import Transactions from "./pages/Transaction.js";
//App JS is a wrapper so all components get rendered in here

const App = () => {
  const { getTransactions } = useContext(TransactionTrackerContext);
  useEffect(() => {
    getTransactions()
 }, [])

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" activeStyle={{color:"blue"}} exact component={Home}/> 
          <Route path="/budget" activeStyle={{color:"blue"}} render={() => <Budget/>}/> 
          <Route path="/transactions" activeStyle={{color:"blue"}} component={Transactions}/>
        </Switch>
      </Router>
    </div>
  
  )
}


export default App;
