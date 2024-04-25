import React from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate()
  const submithandeler = ()=>{
    console.log('hello')
    navigate('/show')
  }
  return (
    <div>
      <button onClick={submithandeler} style={{padding: "3px 10px", backgroundColor: "lightred"}}>Submit</button>
    </div>
  )
}

export default Create