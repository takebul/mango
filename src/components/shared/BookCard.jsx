import BookCoverImage from "./BookCoverImage";
import Link from "next/link";
import { FiStar, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const BookCard = ({ book }) => {
  if (!book) return null;

  const discountVal = book.discount ? String(book.discount).replace(/^-/, "").trim() : null;

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:border-amber-300/80">
      {/* Book Cover Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100 shadow-inner">
        <div className="relative w-full h-full book-spine-effect">
          <BookCoverImage
            src={book.imageUrl}
            alt={book.title}
            title={book.title}
            author={book.author}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="group-hover:scale-105"
          />
        </div>

        {/* Badges Overlay */}
        <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none z-20">
          {discountVal ? (
            <span className="px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white bg-rose-600 rounded-full shadow-md">
              {discountVal.endsWith("%") ? discountVal : `${discountVal}%`} OFF
            </span>
          ) : (
            <span />
          )}

          <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-800 bg-white/95 backdrop-blur-md rounded-full shadow-xs border border-slate-200/80">
            {book.category}
          </span>
        </div>
      </div>

      {/* Book Info */}
      <div className="pt-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-amber-500 font-semibold mb-1">
            <FiStar className="size-3.5 fill-amber-400 text-amber-400" />
            <span>{book.rating || "4.8"}</span>
            <span className="text-slate-400 font-normal">({book.pages || 350} pages)</span>
          </div>

          <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-1 group-hover:text-amber-600 transition">
            {book.title}
          </h3>
          <p className="text-xs font-medium text-slate-500 mt-0.5 mb-2">
            by <span className="text-slate-700 font-semibold">{book.author}</span>
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1 text-emerald-600 font-medium">
              <FiCheckCircle className="size-3.5" />
              <span>In Stock ({book.available_quantity})</span>
            </span>
          </div>

          <Link
            href={`/books/${book.id}`}
            className="mt-3.5 w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold rounded-xl text-slate-800 bg-slate-100 hover:bg-amber-500 hover:text-white transition-all duration-200"
          >
            <span>View Details</span>
            <FiArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

