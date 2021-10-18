import React, { useEffect, useState } from 'react';
import { Container, LinearProgress, TextField, Button } from "@material-ui/core";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

function ProgressBar({ title, color, progress }) {
    const [budgetAmount, setbudgetAmount] = useState(0);
    const [textMode, isTextMode] = useState(false);

    function newBudget(){
        isTextMode(!textMode);
    }

    function renderEditView(){
        return <span className="edit-budget-max">
            <Button 
                className="lower-budget" 
                style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} 
                variant="contained" 
                size="small" 
                color="primary">
                <KeyboardArrowLeftIcon />
            </Button>
            <TextField
                className="edit-budget-max"
                variant="outlined"
                defaultValue={budgetAmount}
            />
            <Button c
                lassName="lower-budget"
                style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} 
                variant="contained" 
                size="small" 
                color="primary">
                <KeyboardArrowRightIcon />
                </Button>
        </span>
    }

    const renderDefaultView = () =>{
        return <> 
        <span className="budget-description"><span className="budget-amount">$0</span> of<span className="budget-max">${budgetAmount}</span></span>
        </>
    }

    return (
        <Container onDoubleClick={newBudget}>
            <h3 className="budget-title">{title} 
            <span className="budget-max">{!textMode ? renderEditView() : renderDefaultView()}</span></h3>
            <LinearProgress 
                className = "budget-bar"  
                variant = "determinate"
                value = {progress}
                color = {color}
                style = {{height: "15px", width: "100%"}}
            />
        </Container>
    )
}

export default ProgressBar
