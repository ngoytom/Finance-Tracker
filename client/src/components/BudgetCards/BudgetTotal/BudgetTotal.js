import React from 'react'
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

function BudgetTotal() {
    return (
        <Card>
            <CardHeader titleTypographyProps={{variant:'h4'}} title="Spending"/>
            <CardContent>
                <Typography variant="h5">$159 spent</Typography>
                <Typography variant="h6">of $1000</Typography>
            </CardContent>
            
        </Card>
    )
}

export default BudgetTotal
