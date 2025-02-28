import React, { useEffect, useState } from "react";
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
    className,
    hideText,
}) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: backgroundColor || "var(--primary)",
        position: position || "relative",
    };
    const [, setWindowWidth] = useState(window.innerWidth);
    const [textVisible, setTextVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth < 768) {
                setTextVisible(!hideText);
            } else {
                setTextVisible(true);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [hideText]);

    return (
        <Button
            style={buttonStyle}
            size={size}
            icon={icon}
            onClick={onClick}
            disabled={disabled}
            className={`def_btn text-text border-0 ${className}`}
            htmlType={type}
        >
            {textVisible && text && <span>{text}</span>}
        </Button>
    );
};

export default Btn;
