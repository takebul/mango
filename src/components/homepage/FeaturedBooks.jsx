import { getBooks } from "@/lib/data";
import BookCard from "../shared/BookCard";

const FeaturedBooks = async () => {
  const books = await getBooks();
  console.log(books);
  return (
    <div className="mb-10">
      <h1 className="font-bold text-5xl text-center mb-10">Featured Books</h1>
      <div className="w-auto mx-auto gap-5 grid sm:grid-cols-2  lg:grid-cols-4  md:w-11/12">
        {books.slice(0, 4).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
