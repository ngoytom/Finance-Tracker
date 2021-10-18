import React from 'react'
import { Card, CardHeader, CardContent, Grid, Typography, Divider } from "@material-ui/core";
import TransactionForm from "./TransactionForm/TransactionForm.js"
import TransactionList from "./TransactionList/TransactionList.js"
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions.js";
import Balance from "../Balance.js";
import useStyles from "./styles";

function TransactionDetails() {
    const title="Income";
    const { total, chartData } = useTransactions(title);
    const classes = useStyles();

    return (
        <Card className={classes.transactionDisplay}>
            <CardHeader>Transaction</CardHeader>
            <CardContent>
                <Typography align="center" variant="h5">Balance: <Balance /></Typography>
                <Divider className={classes.balanceDivider} />
                <TransactionForm />
            </CardContent>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Divider />
                        <Typography variant="subtitle1">Recent Transactions</Typography>
                        <TransactionList />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TransactionDetails
