import axios from "axios";

export const getBooks = async () => {
  try {
      const response = await axios.get("http://localhost:5000/api/books/get_books", {
          timeout: 10000,
      });
      return response.data;
  } catch (error) {
      if (axios.isAxiosError(error)) {
          console.error("Error fetching books:", error.message);
      } else {
          console.error("Unexpected error:", error);
      }
      throw error; 
  }
};

export const cookie_consent = async (consent: string) => {
  try {
      const res = await axios.post(
          "http://localhost:5000/api/auth/set_consent",
          { consent },  
          { timeout: 10000 }
      );
      return res.data;
  } catch (error) {
      console.error("Failed to set consent:", error);
      throw error;
  }
};


export const truncateText = (text, length) => {
        return text && text.length > length ? text.substring(0, length) + "..." : text;
    };