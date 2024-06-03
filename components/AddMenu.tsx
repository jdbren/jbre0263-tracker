import GenreList from "@/components/GenreList";

const AddMenu = ({ isOpen, onClose, onSubmit }: {
  isOpen: boolean,
  onClose: () => void,
  onSubmit: () => void
}) => {

  if (!isOpen) return null;

  return (
    <div
      className="w-1/2 bg-white p-2 border-2 border-black
        rounded-lg shadow-lg"
    >
      <form action={onSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" title="Movie title" />
        <br />
        <label htmlFor="release-year">Released: </label>
        <input type="number" name="release-year" title="Release year" />
        <br />
        <GenreList />
        <p> </p>
        <label htmlFor="runtime">Runtime: </label>
        <input type="number" name="runtime" title="Duration" />
        <br />
        <label htmlFor="rating">Rating: </label>
        <input type="number" name="rating" title="Rating" />
        <br />
        <label htmlFor="director">Director: </label>
        <input type="text" name="director" title="Director" />
        <br />
        <label htmlFor="cast">Cast: </label>
        <input type="text" name="cast" title="Cast" />
        <br />
        <label htmlFor="comments" className="block">Comments: </label>
        <textarea name="comments" title="Comments" />
        <br />
        <button type="button" onClick={onClose}>Cancel</button>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default AddMenu;
