import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import registration from './pages/registration'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<registration/> } path='/registration'/>
      <Route element={<Dashboard/> } path='/dashboard'/>
    
    </Routes>

    </>
  )
}

export default App
