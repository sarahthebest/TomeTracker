import React from "react";
import { BtnProps } from "../../types/Btn";
import { Button } from "antd";

const Btn: React.FC<BtnProps> = ({
    icon,
    onClick,
    text,
    backgroundColor,
    position,
    disabled,
    size
}) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: backgroundColor || "var(--primary)",
        position: position || "relative",
    };

    return (
        <Button
            style={buttonStyle} 
            size={size}
            icon={icon}
            onClick={onClick}
            disabled={disabled}
            className="def_btn text-text"
        >
            {text}
        </Button>
    );
};

export default Btn;

