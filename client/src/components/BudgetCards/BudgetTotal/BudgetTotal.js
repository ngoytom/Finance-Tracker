import React from 'react'
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import useTransactions from "../../../useTransactions.js";
import useStyles from "./styles.js";

function BudgetTotal({ sum }) {
    const classes = useStyles();
    const { total } = useTransactions("Expense");
   
    return (
        <Card className={classes.budgetTotal} style={{backgroundColor: "#d1dc6d", color: "#763000"}}>
            <CardHeader titleTypographyProps={{variant:'h4'}} title="Spending"/>
            <CardContent>
                <Typography variant="h5"><span className={classes.totalLabel}>${total}</span> <span className={classes.totalWord}> spent </span></Typography>
                <Typography variant="body1"> of <span className={classes.spentLabel}>${sum}</span></Typography>
            </CardContent>
            
        </Card>
    )
}

export default BudgetTotal
