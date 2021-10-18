import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../../useTransactions.js";
import useStyles from "./styles.js"

function TransactionChart({title}) {
    const { total, chartData } = useTransactions(title);
    const classes = useStyles();

    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5">${total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    )
}

export default TransactionChart
