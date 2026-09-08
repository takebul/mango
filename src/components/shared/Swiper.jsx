"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BookCard from "./BookCard";
import { FiTrendingUp } from "react-icons/fi";
import Link from "next/link";

const SwiperPage = ({ books = [] }) => {
  const displayBooks = books && books.length > 0 ? books : [];

  if (displayBooks.length === 0) return null;

  return (
    <section className="py-14 bg-slate-100/60 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              <FiTrendingUp className="size-4" />
              <span>Trending Now</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Community Favorites
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              The most borrowed and highest rated books this week
            </p>
          </div>

          <Link
            href="/all-books"
            className="text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 transition"
          >
            <span>View all books →</span>
          </Link>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          speed={700}
          loop={displayBooks.length > 4}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            540: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="pb-12"
        >
          {displayBooks.map((book) => (
            <SwiperSlide key={`swiper-${book.id}`} className="h-auto pb-8">
              <div className="h-full">
                <BookCard book={book} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperPage;

