/**
 * Genre selection dropdown list for filtering movies by genre.
 */
export default function GenreList({ setGenreFilter }) {
  function eventHandler(event) {
    setGenreFilter(event.target.value);
    console.log(event.target.value);
  }

  return (
    <>
      <label htmlFor="genre">Genre: </label>
      <select name="genre" id="genre" onChange={eventHandler}
        className="border-2 border-solid"
      >
        <option>Genre</option>
        <option>Action</option>
        <option>Comedy</option>
        <option>Drama</option>
        <option>Documentary</option>
        <option>Family</option>
        <option>Fantasy</option>
        <option>Horror</option>
        <option>Mystery</option>
        <option>Romance</option>
        <option>Sci-Fi</option>
        <option>Thriller</option>
      </select>
    </>
  );
}
