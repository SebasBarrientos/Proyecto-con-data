import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <span>
            <Link to="/">Home /</Link>
        </span>
        <span>
            <Link to="/chartes"> Chartes /</Link>
        </span>

    </div>
  )
}

export default Header