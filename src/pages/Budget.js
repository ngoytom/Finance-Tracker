import React, { useEffect, useState } from 'react';
import { LinearProgress, Paper, List } from "@material-ui/core";
import TodoForm from "../components/Todo/TodoForm.js";
import TodoList from "../components/Todo/TodoList.js";
import ProgressBar from "../components/ProgressBar"
import "../styles/budget.css";

const LOCAL_STORAGE_KEY = "finance-todo-list"

function Budget() {
    const [todos, setTodos] = useState([]);
    const [progress, setProgress] = useState(30);

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
        <div>
            <h1 className>Spending</h1>
            <div className="budget-item"> <ProgressBar title="Housing" progress={progress} color="secondary" /></div>
            <div className="budget-item"> <ProgressBar title="Housing" progress={progress} color="secondary" /></div>
            <div className="budget-item"> <ProgressBar title="Housing" progress={progress} color="secondary" /></div>
            <div className="goals">
                <Paper className="goals-items" style={{backgroundColor: "blue", maxHeight: 500, overflow: "auto"}}>
                    <h2>Goals</h2>
                    <List>
                        <TodoForm addTodo={addTodo} />
                        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
                    </List>
                </Paper>
            </div>
        </div>
    )
}

export default Budget
