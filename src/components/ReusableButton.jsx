const ReusableButton = ({onClick,text,style}) => {
    return (
        <button 
        onClick={onClick}
        style={style}>
        {text}
      </button>
    );
}

export default ReusableButton;