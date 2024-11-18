export type BtnProps = {
    id: string;
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
