import React from 'react'
import { Link } from 'react-router-dom'
import HomeImage from '../assets/Home.jpg'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home' style={{backgroundImage: `url(${HomeImage})`}}>
      <div className='headerContainer' >
        <h1>kostas Pizzeria</h1>
        <p>WELCOME PIZZA LOVERS</p>
        <Link to={"/menu"}>
           <button className='btn'>ORDER NOW</button>
        </Link>
    
      </div>
    </div>
  )
}

export default Home