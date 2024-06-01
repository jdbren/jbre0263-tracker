import styles from "./page.module.css";

const AddMenu = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className={styles.addMenu}>
      <div
        style={{
          background: "white",
          height: 150,
          width: 240,
          margin: "auto",
          padding: "2%",
          border: "2px solid #000",
          borderRadius: "10px",
          boxShadow: "2px solid black",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default AddMenu;