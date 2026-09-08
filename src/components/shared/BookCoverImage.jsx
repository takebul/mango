"use client";

import { useState } from "react";
import Image from "next/image";
import { FiBookOpen } from "react-icons/fi";

const BookCoverImage = ({
  src,
  alt = "Book Cover",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  priority = false,
  className = "",
  title = "",
  author = "",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-100">
      {/* Eye-Catching Book Mockup Skeleton while fetching */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 bg-gradient-to-br from-slate-100 via-amber-50/40 to-slate-200 shimmer-wave select-none pointer-events-none">
          {/* Spine depth shadow on the left edge */}
          <div className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-10" />

          {/* Top: Category pill skeleton & pulsing activity indicator */}
          <div className="flex items-center justify-between z-10">
            <div className="w-14 h-3.5 rounded-full bg-slate-300/70" />
            <div className="flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-amber-400/80 animate-ping" />
              <span className="size-1.5 rounded-full bg-amber-500" />
            </div>
          </div>

          {/* Center: Glassmorphic emblem & simulated book embossing */}
          <div className="flex flex-col items-center justify-center my-auto py-2 z-10">
            <div className="size-12 rounded-2xl bg-white/90 shadow-xs border border-amber-200/80 flex items-center justify-center mb-3">
              <FiBookOpen className="size-6 text-amber-500 animate-pulse" />
            </div>
            {/* Embossed title skeleton bars */}
            <div className="w-4/5 h-2.5 bg-slate-300/80 rounded-full mb-1.5" />
            <div className="w-3/5 h-2 bg-slate-200/90 rounded-full" />
          </div>

          {/* Bottom: Book specs placeholder */}
          <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between z-10">
            <div className="w-16 h-2 bg-slate-200/90 rounded-full" />
            <div className="w-10 h-2 bg-slate-200/90 rounded-full" />
          </div>
        </div>
      )}

      {/* Fallback Cover if remote image fails */}
      {hasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-gradient-to-br from-amber-600 via-amber-700 to-slate-900 text-white select-none">
          <FiBookOpen className="size-8 text-amber-200/80 mb-2" />
          <h4 className="font-extrabold text-sm line-clamp-3 leading-tight mb-1">
            {title || alt}
          </h4>
          {author && (
            <p className="text-[11px] text-amber-200/70 font-medium">
              {author}
            </p>
          )}
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            isLoading ? "opacity-0 scale-102 blur-xs" : "opacity-100 scale-100 blur-0"
          } ${className}`}
        />
      )}
    </div>
  );
};

export default BookCoverImage;
