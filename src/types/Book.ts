export interface Book {
    id: string;
    title: string;
    author: string;
    status: 'reading' | 'completed' | 'want to read';
    genre: string[];
    startDate?: Date;
    endDate?: Date;
    rating?: number;
  }
  