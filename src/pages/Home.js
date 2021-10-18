import React, { useEffect, useState } from 'react';
import CardDetails from "../components/CardDetails.js";
import { Card, CardHeader, CardContent, Grid, Container, Paper, List } from "@material-ui/core";
import "../styles/home.css";


function Home() {
    return (
        <div>
            <Container maxWidth={false}>
                <h2>Your Financial Dashboard</h2>
                <Grid container spacing={8} alignItems="center" justifyContent="space-evenly">
                    <Grid item xs={12} sm={4} md={4}>
                        <CardDetails title="Monthly Income"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardDetails title="Monthly Expense"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardDetails title="Monthly Saving"/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home
