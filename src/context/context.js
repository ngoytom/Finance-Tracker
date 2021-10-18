import { CardActionArea } from '@material-ui/core';
import React, { useReducer, createContext} from 'react';
import contextReducer, { ACTIONS } from "./contextReducer.js"
const initialState = [];

export const TransactionTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState,)

    const deleteTransaction = (id) => {
        dispatch({ type: ACTIONS.DELETE_TRANSACTION, payload: id });
    }

    const addTransaction = (transaction) => {
        dispatch({ type: ACTIONS.ADD_TRANSACTION, payload: transaction });
    }
    console.log(transactions)
    return (
        <TransactionTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction,
            transactions
        }}>
            {children}
        </TransactionTrackerContext.Provider>
    )
}