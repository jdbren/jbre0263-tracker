/**
 * AddMenu component for adding a new movie to the list.
 */

import styles from "@/app/page.module.css";

/**
 * Opens a form to add a new movie to the list. On submit, the form data is passed
 * to createMovie() in page.tsx.
 * @param isOpen - Whether the form is open or not.
 * @param onClose - Function to close the form.
 * @param onSubmit - Function to submit the form data.
 */
const AddMenu = ({ isOpen, onClose, onSubmit }: {
  isOpen: boolean,
  onClose: () => void,
  onSubmit: (data: FormData) => void
}) => {

  if (!isOpen) return null;

  return (
    <div
      className={styles.addMenu}
    >
      <form action={onSubmit} className="space-y-2">
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" title="Movie title" required/>
        <br />
        <label htmlFor="release-year">Released: </label>
        <input type="number" name="release-year" title="Release year"
          required min='1900'
        />
        <br />
        <label htmlFor="genre">Genre: </label>
        <select name="genre" id="genre" className="border-2 border-solid w-1/8"
          required
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
        <br />
        <label htmlFor="runtime">Runtime (minutes): </label>
        <input type="number" name="runtime" title="Duration"
          required min='0'
        />
        <br />
        <label htmlFor="rating">Rating: </label>
        <input type="number" name="rating" title="Rating"
          required min='0' max='10'
        />
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
        <button type="button" className="bg-red-500" onClick={onClose}>Cancel</button>
        <button type="submit" className="bg-green-600">Confirm</button>
        <br />
      </form>
    </div>
  );
};

export default AddMenu;
