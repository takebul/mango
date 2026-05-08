import AllBooks from "@/components/books-page/AllBooks";
import CategorySidebar from "@/components/books-page/CategorySidebar";
import { getBooks } from "@/lib/data";

const AllBooksPage = async ({ searchParams }) => {
  const { category } = await searchParams;

  const books = await getBooks();

  const filteredCategory = category
    ? books.filter((book) => book.category.toLowerCase() == category)
    : books;

  console.log(filteredCategory);

  return (
    <div>
      <h2>All Books Page</h2>

      <div className="grid grid-cols-6 gap-6 border-2 border-red-500 p-4">
        <div className="col-span-1 border border-green-500">
          <CategorySidebar />
        </div>

        <div className="col-span-5 border border-blue-500">
          <div className="grid grid-cols-3 gap-4">
            {filteredCategory.map((book) => (
              <AllBooks key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
