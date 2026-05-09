import AllBooks from "@/components/books-page/AllBooks";
import CategorySidebar from "@/components/books-page/CategorySidebar";
import SearchBook from "@/components/books-page/SearchBook";
import SearchBookInputForm from "@/components/books-page/SearchBookInputForm";
import { getBooks, getSearchBooks } from "@/lib/data";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AllBooksPage = async ({ searchParams }) => {
  const { category, search } = await searchParams;

  const books = search ? await getSearchBooks(search) : await getBooks();

  const filteredCategory = category
    ? books.filter((book) => book.category.toLowerCase() == category)
    : books;

  return (
    <div>
      <h2 className="text-5xl font-bold text-center my-7">All Books</h2>

      <SearchBookInputForm />

      {books.length === 0 ? (
        <div className="text-center my-10">
          <DotLottieReact
            className="w-120 mx-auto"
            src="https://lottie.host/638c449a-0631-4f58-a4e4-dba49a8110c1/1WnnkogHtf.lottie"
            loop
            autoplay
          />
          <h2 className="text-4xl font-bold">
            This book is not available here.
          </h2>
          <p className="pt-1">Please try another one</p>
        </div>
      ) : (
        <div className="grid grid-cols-6 gap-6 p-4">
          <div className="col-span-1">
            <CategorySidebar />
          </div>

          <div className="col-span-5">
            <div className="grid grid-cols-3 gap-4">
              {filteredCategory.map((book) => (
                <AllBooks key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBooksPage;
