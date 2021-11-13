import React, { useEffect, useState } from 'react';
import CardDetails from "../components/CardDetails.js";
import { Card, CardHeader, Typography, Grid, Container, List } from "@material-ui/core";
import TodoForm from "../components/Todo/TodoForm.js";
import useTransactions from "../useTransactions.js";
import TodoList from "../components/Todo/TodoList.js";
import Stocks from "../components/Stocks/Stocks.js";
import useStyles from "../styles/home.js";

const LOCAL_STORAGE_KEY = "finance-todo-list"

function Home() {
    const classes = useStyles();
    const [todos, setTodos] = useState([]);
    const { total } = useTransactions("Expense");

    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos){
            setTodos(storageTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function toggleComplete(id) {
        setTodos(
          todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed
              };
            }
            return todo;
          })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div className={classes.body}>
            <Container maxWidth={false}>
                <Typography variant="h4" className={classes.heading}>Your Financial Dashboard</Typography>
                <Grid container spacing={8} alignItems="center" justifyContent="space-evenly">
                    <Grid item xs={12} sm={4} md={4}>
                        <CardDetails title="Income" color="#81ff4f"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardDetails title="Expense" amount={total} color="#FF5C58"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardDetails title="Savings" amount={total} color="#798cc9"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Card className={classes.goals}>
                            <CardHeader className={classes.goaltitle} titleTypographyProps={{variant:'h4'}} title="Goals"/>
                            <List>
                                <TodoForm addTodo={addTodo} />
                                <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
                            </List>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Card className={classes.goals}>
                            <CardHeader className={classes.goaltitle} titleTypographyProps={{variant:'h4'}} title="Crypto"/>
                            <Stocks />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home
