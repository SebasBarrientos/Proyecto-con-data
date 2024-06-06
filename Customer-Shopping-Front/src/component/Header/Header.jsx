import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'


const Header = () => {
  return (
    <div className='header'>
        <span>
            <Link to="/"> Home </Link>
        </span>
        <span>
            <Link to="/chartes"> Chartes </Link>
        </span>

    </div>
  )
}

export default Header