import React from 'react'
import { Card, CardHeader, CardActions, CardContent, Typography, Button } from "@material-ui/core";
import useTransactions from "../useTransactions.js";
import { useHistory } from "react-router-dom";

function CardDetails({ title, amount, color }) {
    const history = useHistory();
    let result;
    const { total } = useTransactions("Income");

    if (title === "Income"){
        result = total;
    }
    else if(title === "Savings"){
        result = total - amount;
    }
    else {
        result = amount;
    }
    
    function handleClick() {
        history.push("/transactions");
    }
    
    return (
        <Card style={{backgroundColor: color, color: "white"}}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h4">${result}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{ paddingRight:'20px' }} onClick={handleClick}>Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default CardDetails
