import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
  <ul className="menu">
    <li><Link to="/">News</Link></li>
    <li><Link to="/people">People</Link></li>
  </ul>
)

export default Menu
