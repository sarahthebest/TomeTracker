import { ReactNode } from "react";
import { Position } from "../../types/global.types";

export type BtnProps = {
    icon?: ReactNode;
    size?:"large" | "small";
    onClick?: () => void;
    text: string;
    backgroundColor?: string;
    disabled?: boolean;
    type?:"submit" | "reset" | "button";
    position?:Position;
    ariaLabel?: string;
};
