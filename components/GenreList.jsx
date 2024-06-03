export default function GenreList() {
  return (
    <>
      <label htmlFor="genre">Genre: </label>
      <select name="genre" id="genre" className="border-2 border-solid">
        <option>Genre</option>
        <option>Action</option>
        <option>Comedy</option>
        <option>Drama</option>
        <option>Horror</option>
        <option>Sci-Fi</option>
      </select>
    </>
  );
}
