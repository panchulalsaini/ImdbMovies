

import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Api_Url } from '../Context/Context';
function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState('')
  const [isLoading, setIsLoading] = useState(true)



  const getMovies = async (url) => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      setMovie(data);
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }

  }
  useEffect(() => {
    var timeOut = setTimeout(() => {
      getMovies(`${Api_Url}&i=${id}`);
    }, 1000)
    return () => clearTimeout(timeOut)
  }, [id])

  if (isLoading) {
    return <h1>Loading.........</h1>
  }
  return (
    <>
      <div className='SM-container'>
        <div  className="SM-image"><img src={movie.Poster} /></div>
       <div className='SM-content'>
        <h3>IMDBID : <span>{id}</span></h3>
        <h3>Title : <span>{movie.Title}</span></h3>
        <h3>Actor : <span>{movie.Actors}</span></h3>
        <h3>Ratings:<span>{movie.imdbRating}/10</span></h3>
      <h3>Writer:<span>{movie.Writer}</span></h3>
      <h3>Released:<span>{movie.Released}</span></h3>
      <h3>Rated:<span>{movie.Rated}</span></h3>
      <h3>Year:<span>{movie.Year}</span></h3>
      <h3>Runtime:<span>{movie.Runtime}</span></h3>
      <h3>Language:<span>{movie.Language}</span></h3>
      <h3>Production:<span>{movie.Production}</span></h3>
      <h3>Country:<span>{movie.Country}</span></h3>
      <h3>Genre:<span>{movie.Genre}</span></h3>
      <h3>BoxOffice:<span>{movie.BoxOffice}</span></h3>
        </div>
      </div>
      <div>
        <button className = 'SM-btn'><Link to="/">GoTo Home</Link> </button>
      </div>
    </>
  )
}

export default SingleMovie;
