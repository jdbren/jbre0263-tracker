'use client';

const MyButton = ({action, children}) => {
  return(
    <button type="button" onClick={action} className="bg-purple-400">
      {children}
    </button>
  );
}

export default MyButton;
