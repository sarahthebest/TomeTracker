import React from "react";
import { BtnProps } from "../../types/Btn";
import "./Atom.css"

const Btn: React.FC<BtnProps> = ({ id, onClick, text, backgroundColor, position, disabled }) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: backgroundColor || "white",
        position: position || "relative",
    };

    return (
        <button
            className="rounded hover:text-white p-1 px-2 duration-500 border"
            id={id}
            onClick={onClick}
            style={buttonStyle}
            disabled={disabled}
        >
            {text && text}
        </button>
    );
};

export default Btn;
