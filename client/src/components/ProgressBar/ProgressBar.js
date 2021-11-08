import React, { useState, useEffect, useContext } from 'react';
import { TransactionTrackerContext } from "../../context/context.js"
import { Container, LinearProgress, TextField, Button, Typography } from "@material-ui/core";
import { expenseCategories } from '../../constants/categories.js';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import useTransactions from "../../useTransactions.js";
import useStyles from "./styles.js"

const LOCAL_STORAGE_KEY = "budget-progress"

function ProgressBar({ title, color, index, budget, setBudget }) {
    const [budgetAmount, setbudgetAmount] = useState(budget[index].budget);
    const [textMode, isTextMode] = useState(false);
    let category;
    const classes = useStyles();
    const { getTransactions, transactions } = useContext(TransactionTrackerContext);

    const { filteredCategories } = useTransactions("Expense");
    
    filteredCategories.forEach(() => {
        const filter = filteredCategories.find((c) => c.type === title);
        if (typeof filter !== "undefined"){
            category = filter;
        }
        else{
            category = {title: title, amount: 0};
        }
    });
    function changeView(){
        isTextMode(!textMode);
    }

    function updateBudget(e){
        setbudgetAmount(e.target.value);
        const data = localStorage.getItem(LOCAL_STORAGE_KEY);
        console.log(data)
        if (data != null){
            let amount = JSON.parse(data);
            amount[index].budget = Number(e.target.value);
            let newArr = [...budget];
            newArr[index].budget = e.target.value;
            setBudget(newArr);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(amount));
        }
    }

    function renderEditView(){
        return <>
             <TextField 
                className={classes.editBudgetMax} 
                type="number" 
                label="Set Budget" 
                placeholder={1} 
                InputProps={{ inputProps: { min: 1 }}} 
                fullWidth 
                value={budget[index].budget} 
                onChange={(e) => updateBudget(e)}
            />   
        </> 
    }

    const renderDefaultView = () =>{ 
        return<>
        <span className="budget-description"><span className="budget-amount">${category.amount}</span> of<span className="budget-max">${budget[index].budget}</span></span>
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
        
                style = {{height: "15px", width: "100%"}}
            />
        </Container>
    )
}

export default ProgressBar