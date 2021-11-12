import React, { useState, useEffect } from 'react';
import { Grid } from "@material-ui/core";
import { expenseCategories } from '../constants/categories.js';
import ProgressBar from "../components/ProgressBar/ProgressBar"
import BudgetTotal from "../components/BudgetCards/BudgetTotal/BudgetTotal"
import BudgetCalc from "../components/BudgetCards/BudgetCalc/BudgetCalc"
import "../styles/budget.css";

const LOCAL_STORAGE_KEY = "budget-progress"

function Budget() {
    const [budget, setBudget] = useState(expenseCategories);
    const [sum, setSum] = useState(1100);
   
    useEffect(() => {
        const storageBudget = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        console.log(storageBudget)
        if (storageBudget){
            setBudget(storageBudget)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(budget));
        setSum(budget.reduce((a, { budget }) => a + Number(budget), 0))
    }, [budget]);

    return (
        <Grid container>
            <Grid item xs={3}>
                <BudgetTotal sum={sum}/>
            </Grid>
            <Grid item xs={6}>
                {expenseCategories.map(ex => <div className="budget-item"><ProgressBar 
                                                                                key={ex.id} 
                                                                                title={ex.type} 
                                                                                color={ex.progressColor} 
                                                                                budget={budget} 
                                                                                setBudget={setBudget} 
                                                                                index={ex.id}/> 
                                                                            </div>)}
            </Grid>
            <Grid item xs={3}>
                <BudgetCalc sum={sum}/>
            </Grid>
        </Grid>
    )
}

export default Budget
