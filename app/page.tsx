'use client';
import { useState } from "react";
import styles from "./page.module.css";
import MovieList from "./MovieList";
import { Movie } from "./movie";
import MyButton from "@/components/MyButton";
import GenreList from "@/components/GenreList";
import AddMenu from "@/components/AddMenu";

var storedMovies: Array<Movie> = [];
var reference = null;
if (typeof window !== 'undefined')
  reference = localStorage.getItem('test4');
console.log("Storage: " + reference);

if (reference !== null) {
  storedMovies = JSON.parse(reference).map((m: Movie) => {
    return new Movie(
      m.title,
      m.relYear,
      m.rating,
      m.genre,
      m.director,
      m.cast,
      m.review,
      m.runtime,
      m.uuid
    );
  });
}

export default function Home() {
  const [addOpen, setAddOpen] = useState(false);
  const [movies, setMovies] = useState(storedMovies);
  const [genreFilter, setGenreFilter] = useState('Genre');
  const [sortBy, setSortBy] = useState('Title');

  function createMovie(formData: FormData) {
    let movie = new Movie(
      (formData.get("title") ?? "").toString(),
      Number(formData.get("release-year")),
      Number(formData.get("rating")),
      (formData.get("genre") ?? "").toString(),
      (formData.get("director") ?? "").toString(),
      (formData.get("cast") ?? "").toString(),
      (formData.get("comments") ?? "").toString(),
      Number(formData.get("runtime"))
    )
    console.log("New movie: " + movie);

    const updatedMovies = [...movies, movie];
    setMovies(updatedMovies);

    if (typeof window !== 'undefined') {
      localStorage.setItem('test4', JSON.stringify(updatedMovies));
    }
  }

  function deleteMovie(uuid: string) {
    const updatedMovies = movies.filter((m) => m.uuid !== uuid);
    setMovies(updatedMovies);
    if (typeof window !== 'undefined') {
      localStorage.setItem('test4', JSON.stringify(updatedMovies));
    }
  }

  return (
    <>
      <header>
        <h1 className="text-3xl font-bold">Movie Tracker</h1>
        <MyButton action={()=>setAddOpen(true)} >
          New Movie
        </MyButton>
      </header>
      <main className={styles.main}>
        <div className={styles.listBar}>
          <div className={styles.listBarMenu}>
            <h2>Movies</h2>
          </div>
          <div className={styles.listBarOptions}>
            <GenreList setGenreFilter={setGenreFilter} />
            <SortBy setSortBy={setSortBy} />
          </div>
        </div>
        <AddMenu
          isOpen={addOpen}
          onClose={()=>{setAddOpen(false)}}
          onSubmit={(data) => {createMovie(data); setAddOpen(false);}}
        />
        <MovieList movies={movies} genreFilter={genreFilter} sortBy={sortBy}
          deleteMovie={deleteMovie} />
      </main>
    </>
  );
}

function SortBy({ setSortBy }: {
  setSortBy: (str: string) => void
}) {
  function eventHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(event.target.value);
  }

  return (
    <>
      <label htmlFor="sorting">Sort by:</label>
      <select name="sorting" id="sorting" onChange={eventHandler}>
        <option>Title</option>
        <option>Oldest</option>
        <option>Newest</option>
        <option>Rating</option>
        <option>Date Added</option>
      </select>
    </>
  );
}
