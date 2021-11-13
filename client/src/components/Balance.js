import React, { useContext } from 'react'
import { TransactionTrackerContext } from "../context/context";

function Balance() {
    const { transactions } = useContext(TransactionTrackerContext);
    const amount = transactions.map(transaction => (transaction.type === "Income" ? transaction.amount : Math.abs(transaction.amount) * -1)); //Converts Expense to negative numbers
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2); 

    return (
        <>
          ${total}  
        </>
    )
}

export default Balance
