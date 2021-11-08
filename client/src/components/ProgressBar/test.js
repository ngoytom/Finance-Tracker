import React, { useState, useEffect } from 'react';
import { Container, LinearProgress, TextField, Typography } from "@material-ui/core";
import { expenseCategories } from '../../constants/categories.js';
import useTransactions from "../../useTransactions.js";
import useStyles from "./styles.js"

const LOCAL_STORAGE_KEY = "budget-progress"

function ProgressBar({ title, color, budget, setBudget }) {
    const [budgetAmount, setBudgetAmount] = useState(0);
    const [index, setIndex] = useState(0);
    const [textMode, isTextMode] = useState(false);
    let category;
    const classes = useStyles();

    const { filteredCategories } = useTransactions("Expense");
    console.log(budget);
    filteredCategories.forEach(() => {
        const filter = filteredCategories.find((c) => c.type === title);
        if (typeof filter !== "undefined"){
            category = filter;
        }
        else{
            category = {title: title, amount: 0, budget: 100};
        }
    });
    
    function updateBudget() {
        setIndex(budget.findIndex(x => x.type === title));
        console.log(title)
        console.log(index) //Gives correct Index
    }

    updateBudget()
    //useEffect(() => {
    //    updateBudget()
    //}, [budget])

    function changeView(){
        isTextMode(!textMode);
    }

    function handleSubmit(e){
        console.log(e.target.value)
        setBudget({...budget, budget: e.target.value})
        console.log(budget)
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
                value={budgetAmount} 
            />   
        </> 
    }

    const renderDefaultView = () =>{ 
        return<>
        <span className={classes.budgetDescription}><span className="budget-amount">${category.amount}</span> of<span className="budget-max">${budgetAmount}</span></span>
        </>
    }
    
    console.log(category)
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
                style = {{height: "15px", width: "100%", background: {color}}}
            />
        </Container>
    )
}

export default ProgressBar
