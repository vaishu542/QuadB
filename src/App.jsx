import { useState } from 'react'
import NavBar from './Components/NavBar'
import './App.css'
import { TaskProvider } from './Components/TaskContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskProvider>
        <NavBar />
      </TaskProvider>
    </>
  )
}

export default App
