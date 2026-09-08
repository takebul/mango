"use client";

import EditProfile from "@/components/shared/EditProfile";
import { useSession } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";
import BookCoverImage from "@/components/shared/BookCoverImage";
import {
  FiBookOpen,
  FiAward,
  FiCalendar,
  FiMail,
  FiCheckCircle,
  FiClock,
  FiArrowRight,
  FiLogIn,
  FiRotateCcw,
  FiExternalLink,
} from "react-icons/fi";
import { useBorrowedBooks, returnBook } from "@/lib/borrow-store";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { data: sessionData, isPending } = useSession();
  const user = sessionData?.user;

  // Reactively track borrowed books across user sessions & tabs
  const borrowedBooks = useBorrowedBooks(user);

  const handleReturn = (bookId, title) => {
    const success = returnBook(user, bookId);
    if (success) {
      toast.info(`"${title}" has been returned to the library shelf.`);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="size-12 rounded-full border-4 border-amber-400 border-t-transparent animate-spin" />
          <p className="text-sm font-semibold text-slate-500">Loading reader profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Profile Card Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-8 sm:p-10 text-white shadow-xl shadow-amber-500/15">
          <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-white/10 rounded-full blur-2xl" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            {/* Avatar */}
            <div className="relative">
              <Avatar className="w-24 h-24 sm:w-28 sm:h-28 rounded-full ring-4 ring-white/80 shadow-2xl">
                <Avatar.Image alt={user?.name || "Reader"} src={user?.image} />
                <Avatar.Fallback className="bg-slate-900 text-white font-black text-2xl">
                  {user?.name?.[0]?.toUpperCase() || "G"}
                </Avatar.Fallback>
              </Avatar>
              <span
                className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center text-white"
                title="Active Member"
              >
                <FiCheckCircle className="size-3.5" />
              </span>
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  {user ? (user.name || "Avid Reader") : "Guest Reader"}
                </h1>
                <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/30">
                  {user ? "VIP Reader Tier" : "Guest Reader"}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-amber-100 flex items-center justify-center sm:justify-start gap-2">
                <FiMail className="size-4" />
                <span>{user ? user.email : "Local browser session"}</span>
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 text-xs text-white/90">
                <span className="flex items-center gap-1.5">
                  <FiCalendar className="size-3.5 text-amber-200" />
                  <span>Member Since 2026</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <FiAward className="size-3.5 text-amber-200" />
                  <span>Free Unlimited Access</span>
                </span>
              </div>
            </div>

            {/* Edit / Sign In Button */}
            <div className="w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
              {user ? (
                <EditProfile
                  currentName={user.name || ""}
                  currentImage={user.image || ""}
                />
              ) : (
                <Link
                  href="/signin?callbackUrl=/profile"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold text-slate-900 bg-white hover:bg-amber-50 shadow-md transition"
                >
                  <FiLogIn className="size-4 text-amber-600" />
                  <span>Sign In to Sync</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Reader Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Active Loans
            </p>
            <p className="text-2xl sm:text-3xl font-black text-amber-600 mt-1">
              {borrowedBooks.length} {borrowedBooks.length === 1 ? "Book" : "Books"}
            </p>
            <p className="text-[11px] text-emerald-600 font-semibold mt-1">
              {borrowedBooks.length > 0 ? "Loans in good standing" : "No active loans"}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Loan Period
            </p>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              14 Days
            </p>
            <p className="text-[11px] text-slate-500 font-medium mt-1">
              Per borrowed book
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Access Tier
            </p>
            <p className="text-2xl sm:text-3xl font-black text-indigo-600 mt-1">
              Unlimited
            </p>
            <p className="text-[11px] text-slate-500 font-medium mt-1">
              All genres included
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Community Standing
            </p>
            <p className="text-2xl sm:text-3xl font-black text-emerald-600 mt-1">
              100%
            </p>
            <p className="text-[11px] text-emerald-600 font-medium mt-1">
              On-time returns
            </p>
          </div>
        </div>

        {/* Currently Borrowed Books Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Currently Borrowed Books
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Keep track of your active readings, renewal deadlines, and return status
              </p>
            </div>
            <Link
              href="/all-books"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition"
            >
              <span>Borrow more books</span>
              <FiArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Dynamic Content: Empty State vs Active Loans Grid */}
          {borrowedBooks.length === 0 ? (
            /* Eye-Catching Empty State when user has no borrowed books */
            <div className="py-12 px-4 text-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/70 my-2">
              <div className="size-16 rounded-2xl bg-amber-100/70 text-amber-600 flex items-center justify-center mx-auto mb-3.5 border border-amber-200">
                <FiBookOpen className="size-8" />
              </div>
              <h4 className="font-extrabold text-base sm:text-lg text-slate-900">
                Your Borrowed Bookshelf is Empty
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto mt-1.5 mb-6 leading-relaxed">
                You haven&apos;t borrowed any books yet. Explore our digital library catalog to borrow stories, technology, and science books for free!
              </p>
              <Link
                href="/all-books"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white mango-btn-gradient shadow-md shadow-amber-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <FiBookOpen className="size-4" />
                <span>Explore Catalog & Borrow Books</span>
              </Link>
            </div>
          ) : (
            /* Populated Bookshelf with Live User-Borrowed Books */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {borrowedBooks.map((b) => (
                <div
                  key={b.id}
                  className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-amber-300 transition-all shadow-2xs"
                >
                  {/* Book Cover */}
                  <div className="w-20 aspect-[3/4] relative rounded-xl overflow-hidden bg-slate-200 shrink-0 shadow-xs border border-slate-200">
                    <BookCoverImage
                      src={b.imageUrl}
                      alt={b.title}
                      title={b.title}
                      author={b.author}
                      sizes="80px"
                    />
                  </div>

                  {/* Book Details & Actions */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide rounded-md bg-amber-100 text-amber-800">
                          {b.category || "General"}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                          <FiClock className="size-3.5" />
                          <span>Due in {b.daysRemaining} days</span>
                        </div>
                      </div>

                      <h4 className="font-bold text-sm sm:text-base text-slate-900 truncate mt-1.5">
                        <Link
                          href={`/books/${b.id}`}
                          className="hover:text-amber-600 transition"
                        >
                          {b.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        by <span className="text-slate-700 font-medium">{b.author}</span>
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-3 mt-2 border-t border-slate-200/60">
                      <Link
                        href={`/books/${b.id}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition"
                      >
                        <span>Details</span>
                        <FiExternalLink className="size-3" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleReturn(b.id, b.title)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-rose-200 transition cursor-pointer ml-auto"
                      >
                        <FiRotateCcw className="size-3" />
                        <span>Return Book</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
