import styles from "./page.module.css";
import React from 'react';
import { Movie } from "@/app/movie";

class MovieList extends React.Component {
  movies: Array<Movie>;

  constructor(props: {}) {
    super(props);
    this.movies = new Array<Movie>();
    this.movies.push(new Movie("The Shawshank Redemption", 1994, 9.3, new Date("1994-10-14"),
      "Frank Darabont", ["Tim Robbins", "Morgan Freeman"], ""));
    this.movies.push(new Movie("The Godfather", 1972, 9.2, new Date("1972-03-24"),
      "Francis Ford Coppola", ["Marlon Brando", "Al Pacino"], ""));
  }

  render() {
    return (
      <div className={styles.listLayout}>
        {this.movies.map((movie, index) => (
          <div key={index} className="block">
            <h3 className="font-bold size-20">{movie.title}</h3>
            <p>{movie.year.toString()}</p>
            <p>{movie.rating.toString()}</p>
            <p>{movie.date.toString()}</p>
            <p>{movie.director}</p>
            <p>{movie.cast}</p>
            <p>{movie.review}</p>
          </div>
        ))}
      </div>
    );
  }

}

export default MovieList;
