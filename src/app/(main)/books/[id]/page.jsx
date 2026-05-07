import BookDetails from "@/components/shared/BookDetails";
import { getBookDetails } from "@/lib/data";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;

  const book = await getBookDetails(id);

  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
};

export default BookDetailsPage;
