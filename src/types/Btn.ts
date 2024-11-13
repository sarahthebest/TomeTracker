export type BtnProps = {
    id: string;
    onClick: () => void;
    text: string;
    backgroundColor?: string;
    position?: "static" | "relative" | "absolute" | "fixed" | "sticky" | "inherit";};
