import React from 'react'
import { Card, CardHeader, CardContent, Typography, Divider } from "@material-ui/core";

function BudgetCalc() {
    return (
        <Card>
            <CardHeader titleTypographyProps={{variant:'h4'}} title="Summary"/>
            <CardContent>
                <Typography variant="body1">Income: <span>$15</span> </Typography>
                <Typography variant="body1">Spending: <span>$15</span> </Typography>
                <Divider />
                <Typography variant="body1">Left over: <span>$15</span></Typography>
            </CardContent>
            
        </Card>
    )
}

export default BudgetCalc
