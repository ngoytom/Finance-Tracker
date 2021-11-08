import React from 'react'
import { Card, CardHeader, CardContent, Typography, Divider } from "@material-ui/core";
import useTransactions from "../../../useTransactions.js";
import useStyles from "./styles.js";

function BudgetCalc(){
    const classes = useStyles(); 
    const { total } = useTransactions("Income");
    return (
        <Card className={classes.budgetSummary} style={{backgroundColor: "red"}}>
            <CardHeader titleTypographyProps={{variant:'h4'}} title="Summary"/>
            <CardContent>
                <Typography variant="body1">Income: <span>${total}</span> </Typography>
                <Typography variant="body1">Spending: <span>$15</span> </Typography>
                <Divider />
                <Typography variant="body1">Left over: <span>$15</span></Typography>
            </CardContent>
            
        </Card>
    )
}

export default BudgetCalc
