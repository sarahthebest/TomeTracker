import axios from "axios";


export const getBooks = async () => {
  const res = await axios.get('http://localhost:5000/api/books/get_books', { timeout: 10000 });
  return res.data;
};
