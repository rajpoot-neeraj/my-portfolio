import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './router/Home'
import Project from './router/Project'
import About from './router/About'
import Contact from './router/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const App = () => {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/project' element={<Project/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
  </Routes>
  </>
  )
}

export default App