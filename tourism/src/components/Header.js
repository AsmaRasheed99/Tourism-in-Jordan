import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css";

export default function Header() {
  return (
    <>
    <div className='nav'>
    <Link className='Home' to="/">Home</Link>    
    </div>
    <h1>Tourism In Jordan</h1>
    <hr />
    </>
  )
}

