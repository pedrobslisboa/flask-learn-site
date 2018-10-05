import React from 'react'
import {Link} from 'react-router-dom'



const Header = () => {
  return (
    <nav>
        <ul>
        <li><Link to='/'>List</Link></li>
        <li><Link to='/form'>form</Link></li>
        <li><Link to='/validate'>validate</Link></li>
        </ul>
    </nav>
  )
}

export default Header;
