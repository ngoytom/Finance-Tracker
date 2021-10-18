import React, { useState } from 'react';
import {v4 as uuidv4} from "uuid";
import { Button, TextField} from "@material-ui/core";

function TodoForm( {addTodo} ) {
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
                label="Task"
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button type="submit">Submit</Button>
        </form>
    )}


export default TodoForm
