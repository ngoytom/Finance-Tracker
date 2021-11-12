import React from 'react'
import { Card, CardHeader, CardContent, Typography, Divider } from "@material-ui/core";
import useTransactions from "../../../useTransactions.js";
import useStyles from "./styles.js";

function BudgetCalc({ sum }){
    const classes = useStyles(); 
    const { total } = useTransactions("Income");
    const result = total - sum;

    return (
        <Card className={classes.budgetSummary} style={{backgroundColor: "#f9aff1", color: "#44002c"}}>
            <CardHeader className={classes.title} titleTypographyProps={{variant:'h4'}} title="Summary"/>
            <CardContent className={classes.budgetDetails}>
                <Typography variant="h6">Income: <span className={classes.income}>${total}</span> </Typography>
                <Typography variant="h6">Spending: <span className={classes.spending}>${sum}</span> </Typography>
                <Divider className={classes.divider}/>
                <Typography variant="h6">Left over: <span className={total >= 0 ? classes.spending : classes.income}>${result}</span></Typography>
            </CardContent>
            
        </Card>
    )
}

export default BudgetCalc
