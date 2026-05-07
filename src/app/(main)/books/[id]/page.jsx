import BookDetails from "@/components/shared/BookDetails";
import { getBookDetails } from "@/lib/data";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;

  const book = await getBookDetails(id);

  console.log(book);

  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
};

export default BookDetailsPage;
