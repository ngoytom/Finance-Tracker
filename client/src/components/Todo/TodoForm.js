import React, { useState } from 'react';
import {v4 as uuidv4} from "uuid";
import { Button, TextField} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./styles";

function TodoForm( {addTodo} ) {
    const classes = useStyles();
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })

    function handleTaskInputChange(e){ 
        setTodo({...todo, task: e.target.value}); //Sets value to text in textbox
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()) { //Removes whitespace
            addTodo({...todo, id: uuidv4() })
            setTodo({...todo, task: ""})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                className={classes.input}
                label="Task"
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button className={classes.submitBtn} variant="text" type="submit"> <AddIcon/> </Button>
        </form>
    )}


export default TodoForm
