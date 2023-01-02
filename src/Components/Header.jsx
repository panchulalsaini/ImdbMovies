import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <nav className='nav-container'>
        <div className='logo'>
            <a href='/'>IMDB<sub>Movies</sub></a>
        </div>
        <div className='nav-list'>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Movies</Link></li>
        <li><Link to='./movie/:id'>SingleMovie</Link></li>
    </ul>
    </div>
    </nav>
    </>
  )
}

export default Header;
