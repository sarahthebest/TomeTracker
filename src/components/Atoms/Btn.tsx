import React from "react";
import { BtnProps } from "../../types/Btn"; 

const Btn: React.FC<BtnProps> = ({ id, onClick, text, backgroundColor }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || 'black', 
  };

  return (
    <button className="rounded hover:text-green-700" id={id} onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
};

export default Btn;
