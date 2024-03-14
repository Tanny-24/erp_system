import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <div><p>This is my products page </p> 
    <Link to="/" className='underline'>
        Go to Home
    </Link>
    </div>
  )
}
