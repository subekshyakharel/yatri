import { useState } from 'react'
import Map from './components/Map'
import './App.css'
import Head from './components/Head'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Head/>
      <Map/>
      
    </>
  )
}

export default App
