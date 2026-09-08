import { Avatar } from "@heroui/react";
import { FiStar } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa6";

const ReviewCard = ({ review }) => {
  if (!review) return null;

  return (
    <div className="relative flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-lg shadow-slate-200/40 hover:shadow-xl transition-all duration-300">
      {/* Top row: Rating & Quote icon */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(review.rating || 5)].map((_, i) => (
            <FiStar key={i} className="size-4 fill-amber-400" />
          ))}
        </div>
        <FaQuoteLeft className="size-6 text-amber-200/70" />
      </div>

      {/* Review text */}
      <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-6">
        &ldquo;{review.review}&rdquo;
      </p>

      {/* Reviewer Profile */}
      <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
        <Avatar className="w-11 h-11 rounded-full ring-2 ring-amber-400/80">
          <Avatar.Image alt={review.reviewer_name} src={review.image} />
          <Avatar.Fallback className="bg-amber-500 text-white font-bold text-sm">
            {review.reviewer_name?.[0] || "R"}
          </Avatar.Fallback>
        </Avatar>
        <div>
          <h4 className="font-bold text-slate-900 text-sm sm:text-base">
            {review.reviewer_name}
          </h4>
          <p className="text-xs text-slate-500 font-medium">
            {review.reviewer_position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

