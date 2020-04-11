import React,{useState, useRef, useEffect} from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'aaaaa'

function App() {

  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();

  function handleClearTodos(){
    const newTodos = todos.filter(todo =>!todo.complete)
    setTodos(newTodos)
  }

  useEffect(() =>{
    const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (stored) setTodos(stored)
  }, [])

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  function handleAddTodo(e){
    const name = todoNameRef.current.value;
    if (name === '' ) return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete:false}]
    })
  }
  return (
    <> 
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input type="text" ref={todoNameRef}></input>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleClearTodos}>Clear</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
