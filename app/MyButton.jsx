'use client';

const MyButton = ({action, children}) => {
  return(
    <button type="button" onClick={action}>
      {children}
    </button>
  );
}

export default MyButton;
