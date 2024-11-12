export interface Book {
    id: string;
    title: string;
    author: string;
    status: 'Reading' | 'Completed' | 'Want to read';
    genre: string[];
    startDate?: Date;
    endDate?: Date;
    rating?: number;
  }
  