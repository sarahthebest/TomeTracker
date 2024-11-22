import { SetStateAction } from "react";

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest',
};

export type Nullable<T> = T | null;

export type ApiResponse<T> = {
    isLoggedIn: SetStateAction<boolean>;
    success: boolean;
    data: T;
    message?: string;
};

export interface LoginRequest {
    username: string;
    password: string;
};

export interface  LoginResponse {
    csrfToken: string;
    error:string;
};

export interface BaseProps {
    className?: string;
    style?: React.CSSProperties;
};

export interface User {
    uuid: string;
    username: string;
    email: string;
};

export interface ErrorResponse {
    code: number;
    message: string;
};

export type BookStatus = "Reading" | "Completed" | "Want to read";

export type Position =
    | "static"
    | "relative"
    | "absolute"
    | "fixed"
    | "sticky"
    | "inherit";