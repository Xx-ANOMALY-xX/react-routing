import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/create">create</Link>
        <Link to="/show">show</Link>
    </nav>
  )
}

export default Nav