import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './componant/Counter.'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Deux Compteurs</h1>
      <Counter increment={1}/>
      <Counter increment={2}/>
    </>
  )
}

export default App
