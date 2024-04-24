import React from 'react'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Show from './Components/Show'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </>
  )
}

export default App