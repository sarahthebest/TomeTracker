import { useEffect, useRef, useState } from "react";
import { Book } from "../../components/Books/book.types";

const BookSlider = () => {
  const sliderRefTop = useRef<HTMLDivElement>(null);
  const sliderRefBottom = useRef<HTMLDivElement>(null);
  const [books, setBooks] = useState<
    { _id: string; title: string; isbn?: string[]; imageLinks: { thumbnail?: string } }[]
  >([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/books/getBooks");
        const data: Book[] = await response.json();

        const uniqueBooks = Array.from(
          new Map(
            data
              .filter((book) => book.imageLinks?.thumbnail) 
              .map((book) => [
                Array.isArray(book.isbn) ? book.isbn[0] : book.title,
                {
                  ...book,
                  isbn: Array.isArray(book.isbn) ? book.isbn : book.isbn ? [book.isbn] : undefined,
                  imageLinks: book.imageLinks ? { thumbnail: book.imageLinks.thumbnail } : { thumbnail: undefined },
                },
              ])
          ).values()
        );

        setBooks(uniqueBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const animateSlider = (sliderRef: React.RefObject<HTMLDivElement>, direction: number) => {
      const sliderElement = sliderRef.current;
      if (!sliderElement || books.length === 0) return;

      let position = 0;
      const speed = 0.2;
      const totalWidth = sliderElement.scrollWidth / 2;

      const animate = () => {
        position += speed * direction;
        if (position >= totalWidth || position <= -totalWidth) {
          position = 0;
        }
        sliderElement.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
      };

      return requestAnimationFrame(animate);
    };

    const topSliderAnimation = animateSlider(sliderRefTop, 1); 
    const bottomSliderAnimation = animateSlider(sliderRefBottom, -1); 

    return () => {
      if (topSliderAnimation) cancelAnimationFrame(topSliderAnimation);
      if (bottomSliderAnimation) cancelAnimationFrame(bottomSliderAnimation);
    };
  }, [books]);

  return (
    <div className="relative w-full flex flex-col gap-2">
      <div className="relative overflow-hidden w-full h-40">
        <div
          ref={sliderRefTop}
          className="flex gap-10 w-max items-center"
          style={{ whiteSpace: "nowrap" }}
        >
          {[...books, ...books, ...books].map((book, index) => (
            <img
              key={index}
              src={book.imageLinks?.thumbnail || "/placeholder.jpg"}
              alt={book.title || "Book Cover"}
              className="h-32 w-auto object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden w-full h-40">
        <div
          ref={sliderRefBottom}
          className="flex gap-10 w-max items-center"
          style={{ whiteSpace: "nowrap" }}
        >
          {[...books, ...books, ...books].map((book, index) => (
            <img
              key={index}
              src={book.imageLinks?.thumbnail || "/placeholder.jpg"}
              alt={book.title || "Book Cover"}
              className="h-32 w-auto object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookSlider;
