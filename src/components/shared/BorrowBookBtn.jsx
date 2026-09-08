"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { FiCheck, FiBookOpen, FiRotateCcw, FiUser } from "react-icons/fi";
import { borrowBook, returnBook, useIsBookBorrowed } from "@/lib/borrow-store";

const BorrowBookBtn = ({ book, bookTitle = "this book", availableQuantity = 10 }) => {
  const { data: sessionData } = useSession();
  const user = sessionData?.user;

  const targetBook = book || {
    id: book?.id || bookTitle,
    title: bookTitle,
    available_quantity: availableQuantity,
  };

  const bookId = String(targetBook.id || targetBook._id || bookTitle);
  const title = targetBook.title || bookTitle;
  const stock = targetBook.available_quantity ?? availableQuantity;

  // Reactively track persistent borrow status (survives reloads and syncs across tabs)
  const isBorrowed = useIsBookBorrowed(user, bookId);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBorrowBtn = () => {
    if (stock <= 0) {
      toast.error("Sorry, no copies currently available to borrow");
      return;
    }

    setIsSubmitting(true);
    const success = borrowBook(user, targetBook);
    setTimeout(() => {
      if (success) {
        toast.success(`"${title}" has been added to your profile bookshelf!`);
      } else {
        toast.error("Could not complete borrow request. Please try again.");
      }
      setIsSubmitting(false);
    }, 300);
  };

  const handleReturnBtn = () => {
    setIsSubmitting(true);
    const success = returnBook(user, bookId);
    setTimeout(() => {
      if (success) {
        toast.info(`"${title}" has been returned to the library shelf.`);
      }
      setIsSubmitting(false);
    }, 300);
  };

  // Already Borrowed State (Persistent across reload)
  if (isBorrowed) {
    return (
      <div className="space-y-3">
        <div className="w-full flex items-center justify-between p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-800 shadow-xs">
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <FiCheck className="size-5" />
            </div>
            <div>
              <p className="font-extrabold text-sm text-emerald-900">
                Currently Borrowed
              </p>
              <p className="text-xs text-emerald-700">
                14 Days loan period active
              </p>
            </div>
          </div>

          <Link
            href="/profile"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-800 bg-white border border-emerald-200 hover:bg-emerald-100 transition shadow-2xs"
          >
            <FiUser className="size-3.5" />
            <span>My Shelf</span>
          </Link>
        </div>

        <button
          type="button"
          disabled={isSubmitting}
          onClick={handleReturnBtn}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition cursor-pointer"
        >
          <FiRotateCcw className="size-3.5" />
          <span>{isSubmitting ? "Returning Book..." : "Return Book Early"}</span>
        </button>
      </div>
    );
  }

  // Available to Borrow
  return (
    <button
      type="button"
      disabled={isSubmitting || stock <= 0}
      onClick={handleBorrowBtn}
      className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl text-sm font-bold text-white mango-btn-gradient shadow-md shadow-amber-500/25 hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer"
    >
      {isSubmitting ? (
        <span className="flex items-center gap-2">
          <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>Adding to your shelf...</span>
        </span>
      ) : (
        <>
          <FiBookOpen className="size-4.5" />
          <span>Borrow This Book Now</span>
        </>
      )}
    </button>
  );
};

export default BorrowBookBtn;
