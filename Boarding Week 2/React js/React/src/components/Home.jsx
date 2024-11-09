import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from './Navigation'

const Home = () => {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/about')
    }
  return (
    <div>
      welcome to Home page
      <button onClick={handleClick}>About page</button>
      
    </div>
  )
}

export default Home
