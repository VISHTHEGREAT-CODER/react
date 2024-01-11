import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card2 from './components/card2'
import Card from './components/card'
let myobj={username:"visheh",age:21}
function App() {
  const [count, setCount] = useState(0)
  const addvalue=()=>
  {
    setCount(prevCounter=>prevCounter+1)
    setCount(prevCounter=>prevCounter+1)
    setCount(prevCounter=>prevCounter+1)
  }
  return (
    
    <>

      <div>
      {count}
      <button onClick={addvalue}>Increment</button>
        <button onClick={() => setCount(count -1)}>decre</button>
        
      </div>
      <Card username="cishesh" someobj={myobj}/>
      <Card/>
      <Card2 user="vishesh"></Card2>
      <Card2 user="vishesh1"></Card2>
      <Card2 user="vishesh2"></Card2>
      
    </>
  )
}

export default App
