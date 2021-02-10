import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import TodoList from './TodoList'
import '../index.css'

export default function TodoForm() {
  const [inputText, setInputText] = useState('')

  return (
    <div className="App">
      <header>
        <h1>Thai's Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  )
}

// <div className="w-100 text-center mt-2">
//   <Link to="/">Cancel</Link>
// </div>
