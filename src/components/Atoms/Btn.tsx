import React from "react";
import { BtnProps } from "../../types/Btn";

const Btn: React.FC<BtnProps> = ({ id, onClick, text, backgroundColor, position }) => {
    const buttonStyle = {
        backgroundColor: backgroundColor || "black",
        position: position || "relative",
    };

    return (
        <button
            className="rounded hover:text-green-700 p-1"
            id={id}
            onClick={onClick}
            style={buttonStyle}
        >
            {text && text}
        </button>
    );
};

export default Btn;
