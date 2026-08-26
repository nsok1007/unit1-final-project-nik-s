const ReusableButton = ({onClick,text}) => {
    return (
        <button 
        onClick={onClick}>
        {text}
      </button>
    );
}

export default ReusableButton;