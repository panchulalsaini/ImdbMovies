import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/Context';

function Movies() {
  const { movie, isLoading } = useGlobalContext();
  if (isLoading) {
    return <h1>loading....</h1>
  }
  return (
    <div >
      <div className='main-cont' >
        {
          movie.map((currMovie) => {
            const { imdbID, Title, Poster } = currMovie;
            return <Link to={`movie/${imdbID}`} key={imdbID}>

              <div className='container'>
                <div className='movie-img' >  <img src={Poster} /> </div>
                <h1>{Title}</h1>
              </div>
            </Link>
          })
        }
      </div>

    </div>
  )
}

export default Movies;
