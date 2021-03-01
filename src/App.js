import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

   function handleAddTodo (e){

   }

  return (
    <div>
      <TodoList todos = {todos}/>
      <input type = 'text'/>
      <button onClick = {handleAddTodo}> Add to do </button>
      <button> Clear completed</button>
      <div> 0 left to do</div>
    </div>      

  )
}

export default App;
