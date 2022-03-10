import React from 'react'
import { useRef } from 'react';

const NewTodo : React.FC< {onAddTodo: (input: string)=> void}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submtFormHandler = (event: React.FormEvent) =>{
        event.preventDefault();
        const enteredTodoText  = todoTextInputRef.current!.value;
      
        if(enteredTodoText?.trim().length === 0){
          return
        }
props.onAddTodo(enteredTodoText)
    }
  return (
       <form onSubmit={submtFormHandler}>
      <label htmlFor='text' >Todo Text</label>
      <input type="text" id='text' ref={todoTextInputRef}/>
      <button>Add Todo</button>


    </form>
  )
}

export default NewTodo