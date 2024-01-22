import { useState } from 'react'
import { TodoProvider } from './contexts'

function App() {
  const[todos,settodos]=useState([])

  const addTodo=(todo)=>
  {
    settodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updateTodo = (id, todo) => {
    settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id !== id))
  }


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
   
    </TodoProvider>
  )
}

export default App
