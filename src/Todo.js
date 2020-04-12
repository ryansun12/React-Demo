import React from 'react'

export default function Todo({todo, toggleTodo}) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    
    const list = {
        "font-size":"25px"    
    };
    return (
        <div style={list}>
            <label>
                {todo.name}
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}></input>

            </label>
        </div>
    )
}
