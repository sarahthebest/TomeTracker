
export interface ImageLinks {
    smallThumbnail?: string;
    thumbnail?: string;
}

export interface Book {
    _id: string;
    title: string;
    authors: string[];
    categories?: string[];
    averageRating?: number;
    isbn?: string;
    pageCount?: number;
    publishedDate?: string;
    description?: string;
    imageLinks?: ImageLinks;
    status: BookStatus;
}

export const getBookImage = (imageLinks?: ImageLinks) => {
    const imgNotFound = "src/assets/img/No_Cover.webp"; 
    
    return imageLinks?.thumbnail || imgNotFound;
};

export type BookStatus = "Want to read" | "Reading" | "Completed";
