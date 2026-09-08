import { getBooks } from "@/lib/data";
import BookCard from "../shared/BookCard";
import Link from "next/link";
import { FiAward, FiArrowRight } from "react-icons/fi";

const FeaturedBooks = async () => {
  const books = await getBooks();

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              <FiAward className="size-4" />
              <span>Staff Selected</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Featured Books
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Handpicked must-reads recommended by our curators and literary community
            </p>
          </div>

          <Link
            href="/all-books"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 transition"
          >
            <span>View all collections</span>
            <FiArrowRight className="size-4" />
          </Link>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.slice(0, 8).map((book) => (
            <BookCard key={`featured-${book.id}`} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;

