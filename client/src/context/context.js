import React, { useReducer, createContext, useEffect} from 'react';
import contextReducer, { ACTIONS } from "./contextReducer.js";
import axios from "axios";

const initialState = {
    transactions: [],
    error: null
};

export const TransactionTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(contextReducer, initialState);

    async function getTransactions(){
        try{
            const res = await axios.get("/api/v1/transactions");
            console.log(res.data.data)
            dispatch({
                type: ACTIONS.GET_TRANSACTION,
                payload: res.data.data 
            });
        } catch (err) {
            dispatch({
                type: ACTIONS.TRANSACTION_ERROR,
                payload: err.response.data.error
            });
        }
    }

    async function deleteTransaction(id) {
        try {
          await axios.delete(`/api/v1/transactions/${id}`);
          dispatch({
            type: ACTIONS.DELETE_TRANSACTION,
            payload: id
          });
        } catch (err) {
          dispatch({
            type: ACTIONS.TRANSACTION_ERROR,
            payload: err.response.data.error
          });
        }
      }

      async function addTransaction(transaction) {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        try {
          const res = await axios.post('/api/v1/transactions', transaction, config);
          dispatch({
            type: ACTIONS.ADD_TRANSACTION,
            payload: res.data.data
          });
        } catch (err) {
          dispatch({
            type: ACTIONS.TRANSACTION_ERROR,
            payload: err.response.data.error
          });
        }
      }
    
    console.log(state)
    return (
        <TransactionTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction,
            getTransactions,
            transactions: state.transactions,
            error: state.error
        }}>
            {children}
        </TransactionTrackerContext.Provider>
    )
}