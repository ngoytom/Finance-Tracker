import React, { useState, useEffect } from 'react';
import { Grid, Card } from "@material-ui/core";
import { expenseCategories } from '../constants/categories.js';
import useTransactions from "../useTransactions.js";
import ProgressBar from "../components/ProgressBar/ProgressBar"
import BudgetTotal from "../components/BudgetCards/BudgetTotal/BudgetTotal"
import BudgetCalc from "../components/BudgetCards/BudgetCalc/BudgetCalc"
import "../styles/budget.css";

const LOCAL_STORAGE_KEY = "budget-progress"

function Budget() {
    const { filteredCategories } = useTransactions("Expense");
    const [budget, setBudget] = useState(expenseCategories);
   
    
    useEffect(() => {
        const storageBudget = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        console.log(storageBudget)
        if (storageBudget){
            setBudget(storageBudget)
        }
    }, []);
    console.log(budget);
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(budget));
    }, [budget]);

    return (
        <Grid container>
            <Grid item xs={3}>
                <BudgetTotal/>
            </Grid>
            <Grid item xs={6}>
                {expenseCategories.map(ex => <div className="budget-item"><ProgressBar 
                                                                                key={ex.id} 
                                                                                title={ex.type} 
                                                                                color={ex.color} 
                                                                                budget={budget} 
                                                                                setBudget={setBudget} 
                                                                                index={ex.id}/> 
                                                                            </div>)}
            </Grid>
            <Grid item xs={3}>
                <BudgetCalc />
            </Grid>
        </Grid>
    )
}

export default Budget
