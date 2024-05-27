"use client";

export default function AddButton() {
  function handleClick() {
    console.log("Add button clicked");
  }

  return(
    <button type="button" onClick={handleClick}>
      Add
    </button>
  );
}
