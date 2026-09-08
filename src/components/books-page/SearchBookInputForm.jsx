"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const SearchBookInputForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentQuery = searchParams.get("search") || "";
  const [value, setValue] = useState(currentQuery);
  const [prevQuery, setPrevQuery] = useState(currentQuery);

  if (prevQuery !== currentQuery) {
    setPrevQuery(currentQuery);
    setValue(currentQuery);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    const trimmed = value.trim();

    if (trimmed) {
      params.set("search", trimmed);
    } else {
      params.delete("search");
    }

    router.push(`/all-books?${params.toString()}`);
  };

  const handleClear = () => {
    setValue("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    router.push(`/all-books?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 my-8">
      <form onSubmit={handleSubmit} className="relative flex items-center shadow-lg shadow-slate-200/50 rounded-2xl bg-white border border-slate-200 focus-within:border-amber-400 focus-within:ring-4 focus-within:ring-amber-400/10 transition-all p-1.5">
        <div className="pl-3.5 text-slate-400">
          <FiSearch className="size-5" />
        </div>

        <input
          type="text"
          name="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search by title, author, or keyword..."
          className="w-full bg-transparent px-3 py-2 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none"
        />

        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition mr-1"
            title="Clear search"
          >
            <FiX className="size-4" />
          </button>
        )}

        <button
          type="submit"
          className="shrink-0 px-5 py-2.5 text-xs sm:text-sm font-bold text-white mango-btn-gradient rounded-xl transition shadow-md shadow-amber-500/20"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBookInputForm;

