import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

import './App.css';

function App() {
  // const todos = [new Todo('teach react'), new Todo('teach typescript')];
  const [todos, setTodos] = useState<Todo[]>([])
 
  const onDeleteHandl = (text:string)=>{
   const newList = todos.filter(el =>  el.id !== text)
   setTodos(newList)
 
  }

  const addTodoHandler = (text:string)=>{
    console.log( text)
    const newTodo = new Todo(text)
    setTodos([...todos, newTodo])
    // setTodos((prev) => {
    //   return prev.concat(newTodo);
    // })
  }
  return (
    <div className="App">
      <NewTodo  onAddTodo={addTodoHandler}/>
      <Todos items={todos} onClick={onDeleteHandl} />
    </div>
  );
}

export default App;
