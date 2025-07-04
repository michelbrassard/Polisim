// import { useState } from 'react'
// import reactLogo from './assets/react.svg' -> assets folder
// import viteLogo from '/vite.svg' -> public folder
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Fizika from './pages/Fizika'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fizika" element={<Fizika />} />
      </Routes>
    </div>
  )
}

export default App
