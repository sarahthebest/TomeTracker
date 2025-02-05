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
}) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: backgroundColor || "var(--primary)",
        position: position || "relative",
    };
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [textVisible, setTextVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth < 768) {
                setTextVisible(false);
            } else {
                setTextVisible(true);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [windowWidth]);

    return (
        <Button
            style={buttonStyle}
            size={size}
            icon={icon}
            onClick={onClick}
            disabled={disabled}
            className={`def_btn text-text px-2 md:px-3 ${className}`}
            htmlType={type}
        >
            {textVisible && <span>{text}</span>}
        </Button>
    );
};

export default Btn;
