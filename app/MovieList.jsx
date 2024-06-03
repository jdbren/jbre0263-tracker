import styles from "./page.module.css";
import React from 'react';
import { Movie } from "@/app/movie";
import AddMenu from "@/components/AddMenu";

const MovieList = ({ addOpen, setAddOpen }) => {
  const [movies, setMovies] = React.useState([]);

  function createMovie(formData) {
    const movie = new Movie(
      (formData.get("title") ?? "").toString(),
      Number(formData.get("release-year")),
      Number(formData.get("rating")),
      (formData.get("genre") ?? "").toString(),
      (formData.get("director") ?? "").toString(),
      (formData.get("cast") ?? "").toString().split(","),
      (formData.get("comments") ?? "").toString(),
      Number(formData.get("runtime"))
    )

    console.log(movie);
    setMovies([...movies, movie]);
    setAddOpen(false);
  }

  return (
    <>
    <div className={styles.listLayout}>
      {movies.map((movie, index) => (
        <div key={index} className="block">
          <h3 className="font-bold size-20">{movie.title}</h3>
          <p>{movie.relYear.toString()}</p>
          <p>{movie.rating.toString()}</p>
          <p>{movie.date.toString()}</p>
          <p>{movie.director}</p>
          <p>{movie.cast}</p>
          <p>{movie.review}</p>
        </div>
      ))}
    </div>
    <AddMenu
      isOpen={addOpen}
      onClose={()=>{setAddOpen(false)}}
      onSubmit={createMovie}
    />
    </>
  );
}

export default MovieList;
