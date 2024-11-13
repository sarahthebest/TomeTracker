export interface Book {
    imageLinks: any;
    id: string;
    title: string;
    author: string;
    status: 'Reading' | 'Completed' | 'Want to read';
    startDate?: Date;
    endDate?: Date;
    rating?: number;
  }
  