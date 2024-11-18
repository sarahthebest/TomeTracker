import React from "react";
import { BtnProps } from "../../types/Btn";
import "./Atom.css"

const Btn: React.FC<BtnProps> = ({ id, onClick, text, backgroundColor, position, disabled, type }) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: backgroundColor || "var(--primary)",
        position: position || "relative",
    };

    return (
        <button
            className="rounded text-black hover:brightness-125  p-1 px-2 duration-300"
            id={id}
            onClick={onClick}
            style={buttonStyle}
            disabled={disabled}
            type={type}
        >
            {text && text}
        </button>
    );
};

export default Btn;
