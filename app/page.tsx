import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.listBar}>
        <div className={styles.listBarMenu}>
          <h2>Movies</h2>
          <h2>TV</h2>
        </div>
        <div className={styles.listBarOptions}>
          <label htmlFor="genre">Genre:</label>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option>Action</option>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Horror</option>
            <option>Sci-Fi</option>
          </select>
          <label htmlFor="sorting">
            Sort by:
          </label>
          <select name="sorting" id="sorting">
            <option>Title</option>
            <option>Release Date</option>
          </select>
        </div>
      </div>
      <ul className="hidden">
        <li>
          First
        </li>
        <li>
          Second
        </li>
      </ul>
    </main>
  );
}
