import React from 'react'
import {Card, CardHeader, CardActions, CardContent, Typography, Button} from "@material-ui/core";

function CardDetails({ title }) {
    return (
        <Card style={{backgroundColor: "red"}}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5">$50</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default CardDetails
