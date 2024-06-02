'use client';
import { useState } from "react";
import styles from "./page.module.css";
import MovieList from "./MovieList";
import AddMenu from "../components/AddMenu";
import MyButton from "../components/MyButton";
import GenreList from "@/components/GenreList";

export default function Home() {
  const [addOpen, setAddOpen] = useState(false);

  return (
    <>
    <header>
      <h1 className="text-3xl font-bold">Movie Tracker</h1>
      <MyButton action={()=>{setAddOpen(true)}}>
        New Movie
      </MyButton>
    </header>
    <main className={styles.main}>
      <div className={styles.listBar}>
        <div className={styles.listBarMenu}>
          <h2>Movies</h2>
        </div>
        <div className={styles.listBarOptions}>
          <GenreList />
          <SortBy />
        </div>
      </div>
      <MovieList />
      <AddMenu isOpen={addOpen} onClose={()=>{setAddOpen(false)}}>
        <p>text</p>
      </AddMenu>
    </main>
    </>
  );
}


function SortBy(): JSX.Element {
  return (
    <>
      <label htmlFor="sorting">Sort by:</label>
      <select name="sorting" id="sorting">
        <option>Title</option>
        <option>Release Date</option>
      </select>
    </>
  );
}
