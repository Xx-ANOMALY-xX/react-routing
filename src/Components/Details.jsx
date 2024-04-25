import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Details = () => {
  const data = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const sbmithandeler = ()=>{
    navigate(-1)
  }
  return (
    <div>
        <p>Book <b>{data.id}</b>: Details</p>
        <br />
        {/* <h4 onClick={()=> navigate(`/show/${data.id}/profile`)}>Profile</h4> */}
        <h4 onClick={()=> navigate(`${location.path}/profile`)}>Profile</h4>
        <br />
        <button onClick={sbmithandeler} style={{ borderRadius: '10px', color:'white', padding: "0.5rem 2rem", backgroundColor: "red"}}>Go back</button>
    </div>
  )
}

export default Details