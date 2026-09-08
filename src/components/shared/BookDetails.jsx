import BookCoverImage from "./BookCoverImage";
import Link from "next/link";
import BorrowBookBtn from "./BorrowBookBtn";
import {
  FiArrowLeft,
  FiStar,
  FiBookOpen,
  FiGlobe,
  FiShield,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

const BookDetails = ({ book }) => {
  if (!book) return null;

  const discountVal = book.discount ? String(book.discount).replace(/^-/, "").trim() : null;

  return (
    <div className="min-h-screen bg-slate-50/60 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/all-books"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-amber-600 transition"
          >
            <FiArrowLeft className="size-4" />
            <span>Back to All Books</span>
          </Link>
        </div>

        {/* Main Details Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Left Cover Presentation */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200">
                <div className="relative w-full h-full book-spine-effect">
                  <BookCoverImage
                    src={book.imageUrl}
                    alt={book.title}
                    title={book.title}
                    author={book.author}
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                </div>

                {/* Badges */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-20">
                  {discountVal && (
                    <span className="px-3 py-1 text-xs font-black uppercase text-white bg-rose-600 rounded-full shadow-md">
                      {discountVal.endsWith("%") ? discountVal : `${discountVal}%`} OFF
                    </span>
                  )}
                  <span className="px-3 py-1 text-xs font-bold uppercase text-slate-800 bg-white/95 backdrop-blur-md rounded-full shadow-xs border border-slate-200/80 ml-auto">
                    {book.category}
                  </span>
                </div>
              </div>

              {/* Quick Perks */}
              <div className="mt-6 w-full max-w-sm space-y-2.5 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                  <FiCheckCircle className="size-4" />
                  <span>Physical and digital copies available</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <FiClock className="size-4 text-amber-500" />
                  <span>14 days standard borrowing period (renewable)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <FiShield className="size-4 text-indigo-500" />
                  <span>Zero late return fees for student members</span>
                </div>
              </div>
            </div>

            {/* Right Book Metadata & Actions */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-amber-500 text-sm font-bold mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span>{book.rating || "4.8"} / 5.0</span>
                  <span className="text-slate-400 font-normal">· Verified Reader Rating</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {book.title}
                </h1>

                <p className="text-base text-slate-600 mt-2">
                  Written by <span className="font-bold text-slate-900 text-lg">{book.author}</span>
                </p>

                {/* Specs Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Category</p>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">{book.category}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Pages</p>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">{book.pages || "380"} pages</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Stock Left</p>
                    <p className="text-sm font-bold text-emerald-600 mt-0.5">{book.available_quantity} Copies</p>
                  </div>
                </div>

                {/* Synopsis */}
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Synopsis & Overview
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                    {book.description}
                  </p>
                </div>
              </div>

              {/* Borrow Action */}
              <div className="pt-4 border-t border-slate-100">
                <BorrowBookBtn
                  book={book}
                  bookTitle={book.title}
                  availableQuantity={book.available_quantity}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

