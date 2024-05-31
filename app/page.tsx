import Image from "next/image";
import styles from "./page.module.css";
import MovieList from "./MovieList";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.listBar}>
        <div className={styles.listBarMenu}>
          <h2>Movies</h2>
        </div>
        <div className={styles.listBarOptions}>
          <GenreFilter />
          <SortBy />
        </div>
      </div>
      <MovieList />
    </main>
  );
}

function GenreFilter() {
  return (
    <div>
      <label htmlFor="genre">Genre:</label>
      <select name="genre" id="genre">
        <option>Genre</option>
        <option>Action</option>
        <option>Comedy</option>
        <option>Drama</option>
        <option>Horror</option>
        <option>Sci-Fi</option>
      </select>
    </div>
  );
}

function SortBy() {
  return (
    <div>
      <label htmlFor="sorting">Sort by:</label>
      <select name="sorting" id="sorting">
        <option>Title</option>
        <option>Release Date</option>
      </select>
    </div>
  );
}
