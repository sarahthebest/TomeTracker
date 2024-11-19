import React from "react";
import { BtnProps } from "../../types/Btn";
import "./Atom.css";

const Btn: React.FC<BtnProps> = ({
    icon,
    onClick,
    text,
    backgroundColor,
    position,
    disabled,
    type,
}) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: backgroundColor || "var(--primary)",
        position: position || "relative",
    };

    return (
        <button
            className="rounded w-fit text-slate-900 hover:brightness-125 p-1 px-2 duration-300 flex place-items-center gap-2"
            onClick={onClick}
            style={buttonStyle}
            disabled={disabled}
            type={type}
        >
            {text && text}
            {icon && icon}
        </button>
    );
};

export default Btn;
