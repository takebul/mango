import AllBooks from "@/components/books-page/AllBooks";
import CategorySidebar from "@/components/books-page/CategorySidebar";
import SearchBookInputForm from "@/components/books-page/SearchBookInputForm";
import { getBooks, getSearchBooks } from "@/lib/data";
import { Button } from "@heroui/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

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
            className="mx-auto sm:w-120"
            src="https://lottie.host/638c449a-0631-4f58-a4e4-dba49a8110c1/1WnnkogHtf.lottie"
            loop
            autoplay
          />
          <h2 className="text-4xl font-bold">
            This book is not available here.
          </h2>
          <p className="pt-1 text-xl">Please try another one</p>
          <div className="mt-2">
            <Link href={"/all-books"}>
              <Button>
                <FaArrowLeft /> Previews page
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-6 gap-4 p-4">
          <div className="col-span-1">
            <CategorySidebar />
          </div>

          <div className="col-span-5">
            <div className="grid w-11/12 mx-auto sm:grid-cols-2 gap-4 md:grid-cols-3">
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
