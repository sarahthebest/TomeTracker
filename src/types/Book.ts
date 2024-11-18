export interface Book {
    description: string;
    imageLinks: string;
    id: string;
    title: string;
    authors: [string];
    status: 'Reading' | 'Completed' | 'Want to read';
    startDate?: Date;
    endDate?: Date;
    rating?: number;
  }
  