import React, { useState, useEffect, useContext } from 'react';
import { TransactionTrackerContext } from "../../context/context.js"
import { Container, LinearProgress, TextField, Button, Typography } from "@material-ui/core";
import { expenseCategories } from '../../constants/categories.js';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import useTransactions from "../../useTransactions.js";
import useStyles from "./styles.js"

function ProgressBar({ title, color }) {
    const [budgetAmount, setbudgetAmount] = useState(100);
    const [textMode, isTextMode] = useState(false);
    let category;
    const classes = useStyles();
    const { getTransactions, transactions } = useContext(TransactionTrackerContext);

    const { filteredCategories } = useTransactions("Expense");
    console.log(filteredCategories)
    
    filteredCategories.forEach(() => {
        const filter = filteredCategories.find((c) => c.type === title);
        console.log(filter)
        if (typeof filter !== "undefined"){
            category = filter;
        }
        else{
            category = {title: title, amount: 0};
        }
    });
    console.log(category)
    function changeView(){
        isTextMode(!textMode);
    }

    function addBudget(){
        setbudgetAmount(prevBudget => prevBudget + 5)
    }

    function removeBudget(){
        if (budgetAmount <= 0) {
            return;
        }
        setbudgetAmount(prevBudget => prevBudget - 5)
    }

    function renderEditView(){
        return <span className="edit-budget-max">
            <Button 
                className={classes.adjustBudget} 
                variant="contained"
                onClick= {removeBudget} 
                size="small" 
                color="primary">
                <KeyboardArrowLeftIcon />
            </Button>
            <TextField
                className={classes.budgetText} 
                variant="outlined"
                size="small"
                defaultValue={budgetAmount}
                value={budgetAmount}
            />
            <Button c
                className={classes.adjustBudget}
                variant="contained" 
                onClick= {addBudget}
                size="small" 
                color="primary">
                <KeyboardArrowRightIcon />
                </Button>
        </span>
    }

    const renderDefaultView = () =>{ 
        return<>
        <span className="budget-description"><span className="budget-amount">${category.amount}</span> of<span className="budget-max">${budgetAmount}</span></span>
        </>
    }

    function getProgress() {
        const temp = (category.amount/budgetAmount)*100;
        if (temp >= 100){
            return 100;
        }
        return temp;
    }
    const total = getProgress();

    return (
        <Container onMouseEnter={changeView} onMouseLeave={changeView}>
            <Typography variant="h5" className="budget-title">{title} 
            <span>{!textMode ? renderDefaultView() : renderEditView()}</span></Typography>
            <LinearProgress 
                className = "budget-bar"  
                variant = "determinate"
                value = {total} 
                color = {color}
                style = {{height: "15px", width: "100%"}}
            />
        </Container>
    )
}

export default ProgressBar
