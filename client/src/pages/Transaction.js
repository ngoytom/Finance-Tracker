import React from 'react'
import { Grid } from "@material-ui/core";
import Transactions from "../components/TransactionDetails/TransactionDetails.js";
import TransactionChart from "../components/TransactionDetails/TransactionChart/TransactionChart.js"

function Transaction() {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Transactions />
            </Grid>
            <Grid container direction="column" xs={6} alignItems="center" justifyContent="center">
                <Grid item xs={4}>
                       <TransactionChart title="Income"/>
                </Grid>
                    <Grid item xs={4}>
                        <TransactionChart title="Expense"/>
                    </Grid>
                </Grid>
        </Grid>
    )
}

export default Transaction
