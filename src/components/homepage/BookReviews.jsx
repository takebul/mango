import { getBookReviews } from "@/lib/data";
import ReviewCard from "../shared/ReviewCard";
import { FiMessageSquare } from "react-icons/fi";

const BookReviews = async () => {
  const bookReviews = await getBookReviews();

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            <FiMessageSquare className="size-4" />
            <span>Community Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Loved by Passionate Readers
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            See how Mango helps students, researchers, and book lovers discover their next favorite reads.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {bookReviews.slice(0, 3).map((review) => (
            <ReviewCard key={`review-${review.id}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookReviews;

