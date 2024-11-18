import { ReactNode } from "react";

export type BtnProps = {
    icon?: ReactNode;
    onClick: () => void;
    text: string;
    backgroundColor?: string;
    disabled?: boolean;
    type?:"submit" | "reset" | "button";
    position?:
        | "static"
        | "relative"
        | "absolute"
        | "fixed"
        | "sticky"
        | "inherit";
};
