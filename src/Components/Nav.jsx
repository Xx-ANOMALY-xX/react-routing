import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav style={{width: '80%', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '1.3rem'}}>
        <NavLink style={(e)=> e.isActive === true ? {color: "pink", textDecorationLine: 'none'} : {color: "black", textDecorationLine: 'none'}} to="/">Home</NavLink>
        <NavLink style={(e)=> e.isActive === true ? {color: "pink", textDecorationLine: 'none'} : {color: "black", textDecorationLine: 'none'}} to="/create">create</NavLink>
        <NavLink style={(e)=> e.isActive === true ? {color: "pink", textDecorationLine: 'none'} : {color: "black", textDecorationLine: 'none'}} to="/show">show</NavLink>
    </nav>
  )
}

export default Nav