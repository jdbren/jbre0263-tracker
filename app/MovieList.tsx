import styles from "./page.module.css";
import React, { use, useEffect } from 'react';
import { Movie } from './movie';
import Image from "next/image";



function MovieComponent({ movie, deleteMovie }: {
  movie: Movie ,
  deleteMovie: (uuid: string) => void
}) {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <div id={movie.title}>
      {movie.imageUrl ?
        <img src={movie.imageUrl} alt={movie.title}
          style={{ display: imgLoaded ? 'block' : 'none' }}
          onLoad={() => setImgLoaded(true)}
        /> :
        <Image src="/default.png" alt={movie.title} width='200' height='300' />
      }
      <h3 className="font-bold">{movie.title}</h3>
      <p className="italic">{movie.relYear} {movie.runtime}m</p>
      <p>Rating: {movie.rating}/10</p>
      <p>{movie.genre}</p>
      <p>Directed by: {movie.director}</p>
      <p>Starring: {movie.cast}</p>
      {movie.review && <p>Comments: {movie.review}</p>}
      <button type='button' onClick={() => deleteMovie(movie.uuid)}>Delete</button>
    </div>
  );
}


const MovieList = ({ movies, sortBy, genreFilter, deleteMovie }: {
  movies: Array<Movie>,
  sortBy: string,
  genreFilter: string,
  deleteMovie: (uuid: string) => void
}) => {
  console.log("MovieList: " + movies);
  let list: Array<Movie> = [];

  if (movies)
    list = [...movies];
  else return (<div></div>)

  // Read value from select element
  if (sortBy === 'Title') {
    list.sort((a, b) => a.title.localeCompare(b.title));
  }
  else if (sortBy === 'Oldest') {
    list.sort((a, b) => (a.relYear - b.relYear));
  }
  else if (sortBy === 'Newest') {
    list.sort((a, b) => (b.relYear - a.relYear));
  }
  else if (sortBy === 'Rating') {
    list.sort((a, b) => (b.rating - a.rating));
  }
  else if (sortBy === 'Runtime') {
    list.sort((a, b) => (a.runtime - b.runtime));
  }
  else if (sortBy === 'Date Added') {
    list.sort((a, b) => (new Date(a.date).getTime() -
      new Date(b.date).getTime()));
  }
  else if (sortBy)

  // Filter the movies based on the selected genre
  console.log("Genre Filter: " + genreFilter);
  if (genreFilter !== 'Genre')
    list = list.filter((movie) => movie.genre === genreFilter);

  console.log("List: " + list);

  return (
    <div className={styles.listLayout}>
      {list ? list.map((movie) => (
        <div key={movie.uuid} className="block">
          <MovieComponent movie={movie} deleteMovie={deleteMovie} />
        </div>
      )) : null}
    </div>
  );
}

export default MovieList;
