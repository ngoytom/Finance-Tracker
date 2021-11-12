import React, { useState } from 'react';
import { Container, LinearProgress, TextField, Typography } from "@material-ui/core";
import useTransactions from "../../useTransactions.js";
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./styles.js"

const LOCAL_STORAGE_KEY = "budget-progress"

function ProgressBar({ title, color, index, budget, setBudget }) {
    const StyledLinearProgress = withStyles({
        colorPrimary: {
          backgroundColor: "#00695C"
        },
        barColorPrimary: {
          backgroundColor: color
        }
      })(LinearProgress);

    const [budgetAmount, setbudgetAmount] = useState(budget[index].budget);
    const [textMode, isTextMode] = useState(false);
    let category;
    const classes = useStyles(color);
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
                InputProps={{
                    className: classes.input
                }}
                InputLabelProps={{
                    className: classes.input
                }}
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
        <span className={classes.budgetDescription}><span className="budget-amount">${category.amount}</span> of<span className="budget-max">${budget[index].budget}</span></span>
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
            <Typography variant="h5" style={{ color: color }}className="budget-title">{title} 
            <span>{!textMode ? renderDefaultView() : renderEditView()}</span></Typography>
            <StyledLinearProgress 
                variant = "determinate"
                valueBuffer="100" 
                value = {total} 
                style = {{height: "15px", width: "100%"}}
            />
        </Container>
    )
}

export default ProgressBar