// import { useState } from 'react'
// import reactLogo from './assets/react.svg' -> assets folder
// import viteLogo from '/vite.svg' -> public folder
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Fizika from './pages/Fizika/page'
import MjerneJedinice from './pages/Fizika/gradivo/SIMjerneJedinice'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fizika" element={<Fizika />} />
        <Route path='/fizika/mjerne-jedinice' element={<MjerneJedinice />} />
      </Routes>
    </div>
  )
}

export default App
