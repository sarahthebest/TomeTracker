export interface Book {
  id: string; 
  title: string; 
  authors: string[]; 
  categories?: string[]; 
  averageRating?: number; 
  pageCount?: number; 
  publishedDate?: string; 
  description?: string; 
  imageLinks?: { 
    smallThumbnail?: string;
    thumbnail?: string;
  };
  status: 'Reading' | 'Completed' | 'Want to read'; 
}
