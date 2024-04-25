import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <NavLink style={(e)=> e.isActive === true ? {color: "pink"} : {color: "black"}} to="/">Home</NavLink>
        <NavLink style={(e)=> e.isActive === true ? {color: "pink"} : {color: "black"}} to="/create">create</NavLink>
        <NavLink style={(e)=> e.isActive === true ? {color: "pink"} : {color: "black"}} to="/show">show</NavLink>
    </nav>
  )
}

export default Nav