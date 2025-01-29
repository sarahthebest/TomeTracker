import { BookStatus } from "../../types/global.types";

export interface ImageLinks {
    smallThumbnail?: string;
    thumbnail?: string;
}

export interface VolumeInfo {
    title: string;
    authors: string[];
    description?: string;
    publisher?: string;
    publishedDate?: string;
    pageCount?: number;
    categories?: string[];
    imageLinks?: ImageLinks;
}

export interface Book {
    _id: string;
    volumeInfo: VolumeInfo;
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

    
};
export const getBookImage = (imageLinks?: ImageLinks) => {
    const imgNotFound = "src/assets/img/No_Cover.webp"; 
    
    return imageLinks?.thumbnail || imgNotFound;
};