import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-dark p-4' >
        <Link className='me-5' to="/">home</Link>
        <Link className='me-5' to="/about">About</Link>
        <Link to="/Profile">Profile</Link>
    </div>
  )
}

export default Nav