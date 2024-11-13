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
            className="rounded text-black hover:text-white p-1 px-2 duration-300"
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
