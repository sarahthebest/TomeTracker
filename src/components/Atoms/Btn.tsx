import React from "react";
import { BtnProps } from "./button.types";
import { Button } from "antd";

const Btn: React.FC<BtnProps> = ({
    icon,
    onClick,
    text,
    backgroundColor,
    position,
    disabled,
    size,
    type,
    className
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
            className={`def_btn text-text ${className}`}
            htmlType={type}
        >
            {text}
        </Button>
    );
};

export default Btn;

