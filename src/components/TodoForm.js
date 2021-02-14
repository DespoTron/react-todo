import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import TodoList from './TodoList'
// import '../App.css'

export default function TodoForm() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    filterHandler()
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
    }
  }

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
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  )
}

// <div className="w-100 text-center mt-2">
//   <Link to="/">Cancel</Link>
// </div>
