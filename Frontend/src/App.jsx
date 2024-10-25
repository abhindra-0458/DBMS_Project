import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import About from './components/About/About'
import Dashboard from './components/Dashboard/Dashboard'
import './App.css'

import Pages from './components/Pages/Pages'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Pages />} />
          <Route path='/signup' element = {<Signup />} />
          <Route path='/about' element = {<About />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/dashboard' element = {<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App