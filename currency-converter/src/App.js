import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import ToDoList from './ToDoList';
import Todo from './Todo';
import uuid from 'react-uuid';

const LOCALSTORAGE_KEY = 'todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoContent = useRef();

  useEffect(() => {
    const storedTodos= JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(todos));
  }, [todos])


  function handleAddTodo(e){
    const content = todoContent.current.value;
    if(content === '') return;
    setTodos(prevTodos => {
      console.log(uuid());
      return [...prevTodos, {id:uuid(), name: content, completed: false}]
    })
    todoContent.current.value = null;
  }

  function toggleTodo(id){
    const newTodos= [...todos];
    const foundTodo = newTodos.find(todo => todo.id === id);
    foundTodo.completed = !foundTodo.completed;
    setTodos(newTodos);
  }


  return (
    <>
      <ToDoList todos={todos} toggleTodo = {toggleTodo} />
      <input ref={todoContent} type='text' />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Todo</button>
      <div>{todos.filter(todo =>!todo.complete).length} left to do</div>
    </>
  );
}

export default App;