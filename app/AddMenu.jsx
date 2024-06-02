import styles from "./page.module.css";

const AddMenu = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className={styles.addMenu}>
      <div
        className="w-1/2 bg-white p-2 border-2 border-black
          rounded-lg shadow-lg"
      >
        {children}
      </div>
    </div>
  );
}

export default AddMenu;
