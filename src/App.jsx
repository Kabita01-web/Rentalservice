import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Terms from './Pages/Terms'
import Contact from './Pages/Contact'
import Requirement from './Pages/Requirement'
import About from './Pages/About'
import Room from './Pages/Room'
import Policy from './Pages/Policy'
import Help from './Pages/Help'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/terms' element={<Terms/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/requirement' element={<Requirement/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/room' element={<Room/>} />
        <Route path='/policy' element={<Policy/>} />
       <Route path='/help' element={<Help/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App