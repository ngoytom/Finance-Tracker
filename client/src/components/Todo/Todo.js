import React from 'react'
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles";

function Todo( {todo, toggleComplete, removeTodo} ) {
    const classes = useStyles();
    function handleCheckboxClick(){
        toggleComplete(todo.id);
    }

    function handleRemoveClick(){
        removeTodo(todo.id);
    }

    return ( 
        <ListItem className={classes.listItem}>
            <Checkbox className={classes.check} checked={todo.completed} type="checkbox" onClick={handleCheckboxClick}/>
            <Typography variant="subtitle1" style={{
                color: "black",
                textDecoration: todo.completed ? "line-through" : null,
            }}>{todo.task}</Typography>
            <IconButton className={classes.deleteItem} onClick={handleRemoveClick}><CloseIcon/></IconButton>
        </ListItem>
    )
}

export default Todo
