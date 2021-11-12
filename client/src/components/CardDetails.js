import React from 'react'
import {Card, CardHeader, CardActions, CardContent, Typography, Button} from "@material-ui/core";
import { useHistory } from "react-router-dom";

function CardDetails({ title, color }) {
    const history = useHistory();

    function handleClick() {
        history.push("/transactions");
    }
    return (
        <Card style={{backgroundColor: color, color: "white"}}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5">$50</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{ paddingRight:'20px' }} onClick={handleClick}>Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default CardDetails
