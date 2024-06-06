'use client';

// Generic button component that takes an action and children as props
const MyButton = ({action, children}) => {
  return(
    <button type="button" onClick={action} className="bg-purple-400">
      {children}
    </button>
  );
}

export default MyButton;
