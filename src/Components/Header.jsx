import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <nav className='nav-container'>
        <div className='logo'>
            <a href='/ImdbMovies'>IMDB<sub>Movies</sub></a>
        </div>
        <div className='nav-list'>
    <ul>
        <li><Link to='/ImdbMovies'>Home</Link></li>
        <li><Link to='/ImdbMovies'>Movies</Link></li>
        <li><Link to='/ImdbMovies/movie/:id'>SingleMovie</Link></li>
    </ul>
    </div>
    </nav>
    </>
  )
}

export default Header;
