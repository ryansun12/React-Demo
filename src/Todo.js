import React from 'react'

export default function Todo({todo, toggleTodo}) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    
    const list = {
        textAlign:"left",
        fontSize:"25px",
    };
    return (
        <div style={list}>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}></input>
                <span style={ todo.complete? {textDecorationLine: 'line-through',
                 textDecorationStyle: 'solid'}: {}}>{todo.name}</span>
            </label>
        </div>
    )
}
