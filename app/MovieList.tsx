import styles from "./page.module.css";
import { Movie } from "@/app/movie";

export default function MovieList() {
  var movies = new Array<Movie>();
  movies.push(new Movie("The Shawshank Redemption", 1994, 9.3, new Date(Date.now()),
    "Frank Darabont", ["Tim Robbins", "Morgan Freeman"], ""));
  movies.push(new Movie("The Godfather", 1972, 9.2, new Date(Date.now()),
    "Francis Ford Coppola", ["Marlon Brando", "Al Pacino"], ""));

  return (
    <div className={styles.listLayout}>
      {movies.map((movie, index) => (
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
