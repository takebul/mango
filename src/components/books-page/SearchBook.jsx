import { getSearchBooks } from "@/lib/data";
import SearchBookInputForm from "./SearchBookInputForm";

const SearchBook = async ({ searchParams }) => {
  const search = await searchParams;

  const searchBooks = await getSearchBooks(search);

  console.log({ searchTitle }, "search_title");

  return (
    <div>
      <SearchBookInputForm />
    </div>
  );
};

export default SearchBook;
