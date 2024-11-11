export interface Book {
    id: string;
    title: string;
    author: string;
    status: 'Reading' | 'Completed' | 'Want to read';
    genre: string[];
    startDate?: Date;
    endDate?: Date;
    rating?: number;
    set_book_status: React.Dispatch<React.SetStateAction<'Reading' | 'Completed' | 'Want to read'>>;
  }
  