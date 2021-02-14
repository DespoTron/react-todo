import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import TodoList from './TodoList'
// import '../App.css'

export default function TodoForm() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div className="todo-form">
      <header>
        <h1>Thai's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

// <div className="w-100 text-center mt-2">
//   <Link to="/">Cancel</Link>
// </div>
