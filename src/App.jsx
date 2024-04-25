import React from 'react'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Show from './Components/Show'
import Details from './Components/Details'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/show" element={<Show />}>
          <Route path="/show/:id" element={<Details />} />
        </Route>
      </Routes>
    </>
  )
}

export default App