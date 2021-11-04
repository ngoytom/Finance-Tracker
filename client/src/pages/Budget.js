import React, { useContext, useEffect } from 'react';
import { Grid, Typography } from "@material-ui/core";
import ProgressBar from "../components/ProgessBar/ProgressBar"
import BudgetTotal from "../components/BudgetCards/BudgetTotal/BudgetTotal"
import BudgetCalc from "../components/BudgetCards/BudgetCalc/BudgetCalc"
import { TransactionTrackerContext } from "../context/context.js"
import "../styles/budget.css";

function Budget({transaction}) {
    const { getTransactions, transactions } = useContext(TransactionTrackerContext);

    return (
        <Grid container>
            <Grid item xs={2}>
                <BudgetTotal />
            </Grid>
            <Grid item xs={8}>
                <div className="budget-item"> <ProgressBar title="Clothes" color="secondary" /></div>
                <div className="budget-item"> <ProgressBar title="Food" color="secondary" /></div>
                <div className="budget-item"> <ProgressBar title="Phone" color="secondary" /></div>
            </Grid>
            <Grid item xs={2}>
                <BudgetCalc />
            </Grid>
        </Grid>
    )
}

export default Budget
