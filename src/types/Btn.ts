export type BtnProps = {
    id: string;
    onClick: () => void;
    text: string;
    backgroundColor?: string;
    disabled?: boolean;
    position?:
        | "static"
        | "relative"
        | "absolute"
        | "fixed"
        | "sticky"
        | "inherit";
};
