import React, { useState, useContext, useEffect } from 'react'
import { TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { TransactionTrackerContext } from "../../../context/context.js"
import { v4 as uuidv4} from "uuid";
import formatDate from "../../../utils/formatDate.js"
import { incomeCategories, expenseCategories} from "../../../constants/categories.js"

const initialState = {
    amount: 1,
    type: "Income",
    category: "Salary", 
    date: formatDate(new Date()),
}

function TransactionForm() {
    const [formData, setFormData] = useState(initialState);
    const { addTransaction, getTransactions } = useContext(TransactionTrackerContext);
    let current = formData.type === "Income" ? "Food" : "Salary";

    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }
        addTransaction(transaction);
        setFormData(initialState);
    };

    useEffect(() => {
        getTransactions()
     }, [])

    const selectedCategories = formData.type === "Income" ? incomeCategories : expenseCategories;

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value, category: current})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                        {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" placeholder={1} InputProps={{ inputProps: { min: 1 }}} fullWidth value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})}/>
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth InputLabelProps={{ shrink: true }} value={formData.date} onChange={(e) => setFormData({...formData, date: formatDate(e.target.value)})}/>
            </Grid>
            <Button variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
        </Grid>
    )
}

export default TransactionForm
