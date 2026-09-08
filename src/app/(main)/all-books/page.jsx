import { Suspense } from "react";
import AllBooks from "@/components/books-page/AllBooks";
import BookFilterBar from "@/components/books-page/BookFilterBar";
import { getBooks, getBooksCategories } from "@/lib/data";
import Link from "next/link";
import { FiBookOpen, FiArrowLeft, FiInbox } from "react-icons/fi";

const AllBooksPage = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const rawCategory = resolvedParams?.category ? String(resolvedParams.category).toLowerCase().trim() : "";
  const isAllCategory = !rawCategory || rawCategory === "all" || rawCategory === "all books";
  const category = isAllCategory ? "" : rawCategory;

  const search = resolvedParams?.search ? String(resolvedParams.search).trim() : "";

  // Fetch all books and categories
  const [allBooks, categories] = await Promise.all([
    getBooks(),
    getBooksCategories(),
  ]);

  // Compute category counts
  const categoryCounts = {};
  for (const b of allBooks) {
    const c = (b.category || "").toLowerCase().trim();
    categoryCounts[c] = (categoryCounts[c] || 0) + 1;
  }

  // Filter books by search and category
  let filteredBooks = allBooks;

  if (search) {
    const query = search.toLowerCase();
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.title?.toLowerCase().includes(query) ||
        book.author?.toLowerCase().includes(query) ||
        book.category?.toLowerCase().includes(query)
    );
  }

  if (category) {
    filteredBooks = filteredBooks.filter(
      (book) => book.category?.toLowerCase().trim() === category
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 mb-3">
            <FiBookOpen className="size-3.5 text-amber-600" />
            <span>Digital Library Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Explore All Books
          </h1>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base max-w-xl mx-auto">
            Discover, filter, and borrow from our premier collection of literature, cutting-edge technology, and breakthrough science.
          </p>
        </div>

        {/* Unified Search & Category Filter Toolbar (Side-by-Side) */}
        <Suspense
          fallback={
            <div className="w-full h-24 bg-white rounded-2xl border border-slate-200 animate-pulse mb-8" />
          }
        >
          <BookFilterBar
            categories={categories}
            allBooksCount={allBooks.length}
            categoryCounts={categoryCounts}
            totalFiltered={filteredBooks.length}
          />
        </Suspense>

        {/* Books Grid / Empty State */}
        {filteredBooks.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200/90 p-12 text-center shadow-sm my-6 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mx-auto mb-4 border border-amber-200/60">
              <FiInbox className="size-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              No books found
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mt-2 leading-relaxed">
              We couldn&apos;t find any books matching your current search or category filter. Try clearing your filters or searching with different keywords.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/all-books"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white mango-btn-gradient shadow-md shadow-amber-500/20"
              >
                <FiArrowLeft className="size-4" />
                <span>Show All Books</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200 text-xs sm:text-sm text-slate-500 font-semibold">
              <span>
                Showing <strong className="text-slate-900 font-bold">{filteredBooks.length}</strong> {filteredBooks.length === 1 ? "book" : "books"}
              </span>
              <span className="text-emerald-600 font-bold flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for free digital borrowing</span>
              </span>
            </div>

            {/* 4-Column Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <AllBooks key={book.id} book={book} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBooksPage;
