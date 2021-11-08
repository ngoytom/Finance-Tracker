import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import useTransactions from "../../../useTransactions.js";
import { expenseCategories } from '../../../constants/categories.js';
import useStyles from "./styles.js";

function BudgetTotal() {
    const classes = useStyles();
    const [sum, setSum] = useState(1100);
    const { total } = useTransactions("Expense");
    console.log(expenseCategories)

    useEffect(() => {
        updateSum()
     }, [sum])
    
    function updateSum(){
        setSum(expenseCategories.reduce((a, { budget }) => a + budget, 0))
    }

    console.log(sum)
    return (
        <Card className={classes.budgetTotal} style={{backgroundColor: "red"}}>
            <CardHeader titleTypographyProps={{variant:'h4'}} title="Spending"/>
            <CardContent>
                <Typography variant="h5">${total} spent</Typography>
                <Typography variant="h6">of ${sum}</Typography>
            </CardContent>
            
        </Card>
    )
}

export default BudgetTotal
