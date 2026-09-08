"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FiSearch, FiX, FiFilter, FiCheck, FiRotateCcw } from "react-icons/fi";

const BookFilterBar = ({
  categories = [],
  allBooksCount = 0,
  categoryCounts = {},
  totalFiltered = 0,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") || "";
  const currentCategory = searchParams.get("category") || "";

  const [searchValue, setSearchValue] = useState(currentSearch);
  const [prevSearch, setPrevSearch] = useState(currentSearch);

  // Sync state during render when URL query changes
  if (prevSearch !== currentSearch) {
    setPrevSearch(currentSearch);
    setSearchValue(currentSearch);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    const trimmed = searchValue.trim();

    if (trimmed) {
      params.set("search", trimmed);
    } else {
      params.delete("search");
    }

    const query = params.toString();
    router.push(query ? `/all-books?${query}` : "/all-books", { scroll: false });
  };

  const handleClearSearch = () => {
    setSearchValue("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    const query = params.toString();
    router.push(query ? `/all-books?${query}` : "/all-books", { scroll: false });
  };

  const handleCategorySelect = (categorySlug) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!categorySlug || categorySlug === "all") {
      // Clear category to show all books
      params.delete("category");
    } else if (currentCategory.toLowerCase() === categorySlug.toLowerCase()) {
      // Toggle off
      params.delete("category");
    } else {
      params.set("category", categorySlug);
    }

    const query = params.toString();
    router.push(query ? `/all-books?${query}` : "/all-books", { scroll: false });
  };

  const handleResetAll = () => {
    setSearchValue("");
    router.push("/all-books", { scroll: false });
  };

  const isAllActive = !currentCategory || currentCategory.toLowerCase() === "all";

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-md shadow-slate-200/50 p-4 sm:p-5 mb-8 transition-all">
      {/* Search & Category Filter Beside Each Other */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Left: Search Input Filter */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative flex items-center bg-slate-50 border border-slate-200 rounded-xl p-1.5 focus-within:border-amber-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-amber-500/10 transition-all flex-1 max-w-xl"
        >
          <div className="pl-3 text-slate-400">
            <FiSearch className="size-4.5" />
          </div>

          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search by title, author, or keyword..."
            className="w-full bg-transparent px-3 py-1.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
          />

          {searchValue && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition mr-1.5"
              title="Clear search"
            >
              <FiX className="size-4" />
            </button>
          )}

          <button
            type="submit"
            className="shrink-0 px-4 py-2 text-xs font-bold text-white mango-btn-gradient rounded-lg shadow-xs transition hover:scale-[1.02] active:scale-[0.98]"
          >
            Search
          </button>
        </form>

        {/* Right (Beside): Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <div className="hidden xl:flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-wider pl-1 pr-2 border-r border-slate-200 shrink-0">
            <FiFilter className="size-3.5 text-amber-500" />
            <span>Categories</span>
          </div>

          {/* All Books Button */}
          <button
            type="button"
            onClick={() => handleCategorySelect("all")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer select-none ${
              isAllActive
                ? "bg-amber-500 text-white shadow-md shadow-amber-500/25 font-bold border border-amber-500"
                : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
            }`}
          >
            {isAllActive && <FiCheck className="size-3.5 shrink-0 text-white" />}
            <span>All Books</span>
            <span
              className={`text-[11px] px-2 py-0.5 rounded-full font-bold ml-1 ${
                isAllActive ? "bg-white/25 text-white" : "bg-slate-200/80 text-slate-600"
              }`}
            >
              {allBooksCount}
            </span>
          </button>

          {/* Dynamic Categories */}
          {categories.map((cat) => {
            const slug = (cat.slug || cat.name).toLowerCase();
            const count = categoryCounts[slug] || 0;
            const isActive = currentCategory.toLowerCase() === slug;

            return (
              <button
                key={cat.id || slug}
                type="button"
                onClick={() => handleCategorySelect(slug)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer select-none ${
                  isActive
                    ? "bg-amber-500 text-white shadow-md shadow-amber-500/25 font-bold border border-amber-500"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {isActive && <FiCheck className="size-3.5 shrink-0 text-white" />}
                <span className="capitalize">{cat.name}</span>
                {count > 0 && (
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-bold ml-1 ${
                      isActive ? "bg-white/25 text-white" : "bg-slate-200/80 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter Indicators & Results Stats */}
      <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-500">
          <span>
            Showing <strong className="text-slate-900 font-bold">{totalFiltered}</strong> {totalFiltered === 1 ? "book" : "books"}
          </span>
          {(currentSearch || currentCategory) && (
            <span className="text-slate-300">•</span>
          )}
          {currentSearch && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 font-medium">
              Keyword: &ldquo;{currentSearch}&rdquo;
              <button
                type="button"
                onClick={handleClearSearch}
                className="hover:text-amber-600 ml-1"
                title="Remove keyword filter"
              >
                <FiX className="size-3.5" />
              </button>
            </span>
          )}
          {currentCategory && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 font-medium capitalize">
              Category: {currentCategory}
              <button
                type="button"
                onClick={() => handleCategorySelect("all")}
                className="hover:text-amber-600 ml-1"
                title="Remove category filter"
              >
                <FiX className="size-3.5" />
              </button>
            </span>
          )}
        </div>

        {(currentSearch || currentCategory) && (
          <button
            type="button"
            onClick={handleResetAll}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 hover:underline cursor-pointer"
          >
            <FiRotateCcw className="size-3.5" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default BookFilterBar;
