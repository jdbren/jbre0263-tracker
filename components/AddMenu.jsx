import GenreList from "@/components/GenreList";

const AddMenu = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="w-1/2 bg-white p-2 border-2 border-black
        rounded-lg shadow-lg"
    >
      <form>
        <label for="title">Title: </label>
        <input type="text" name="title" />
        <br />
        <label for="release-year">Released: </label>
        <input type="number" name="release-year" />
        <br />
        <GenreList />
        <br />
        <label for="rating">Rating: </label>
        <input type="number" name="rating" />
      </form>
    </div>
  );
}

export default AddMenu;
