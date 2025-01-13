import { BookStatus } from "../../types/global.types";

export interface ImageLinks {
    smallThumbnail?: string;
    thumbnail?: string;
}

export interface Book {
    id: string; 
    title: string; 
    authors: string[]; 
    categories?: string[]; 
    averageRating?: number; 
    isbn?:string;
    pageCount?: number; 
    publishedDate?: string; 
    description?: string; 
    imageLinks?: ImageLinks; 
    status: BookStatus; 
}
