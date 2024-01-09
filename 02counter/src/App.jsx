import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter]=useState(15)
  // let counter=15;
  const removevalue=()=>
  {
    
    setCounter(counter - 1 >= 0 ? counter - 1 : 0);
    console.log("value removed", counter);
   
  }
  const addValue=()=>
  {
    
    setCounter(counter+1);
    console.log("value added",counter);
  }
  return (
    <>
      <h1>Chai Aur react</h1>
      <h2> Counter value:{counter}</h2>

      <button onClick={addValue}>Add value{counter}</button>
      <br/>
      <button onClick={removevalue}>remove value{counter}</button>
    </>
  )
}

export default App
