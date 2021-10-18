import React from 'react'
import { Card, CardHeader, CardContent, Grid, Container, Paper, List } from "@material-ui/core";
import Transactions from "../components/TransactionDetails/TransactionDetails.js";
import TransactionChart from "../components/TransactionDetails/TransactionChart/TransactionChart.js"

function Transaction() {
    return (
        <div>
            <Grid container >
                <Grid item xs={6}>
                    <Transactions />
                </Grid>
                <Grid container direction="column" xs={6} alignItems="center" justifyContent="center">
                    <Grid item xs={5}>
                        <TransactionChart title="Income"/>
                    </Grid>
                    <Grid item xs={5}>
                        <TransactionChart title="Expense"/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Transaction
