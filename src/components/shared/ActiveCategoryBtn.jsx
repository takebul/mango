"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FiCheck } from "react-icons/fi";

const ActiveCategoryBtn = ({ category, count, className = "" }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category");
  const rawSlug = category?.slug || category?.name || "";
  const categorySlug = rawSlug.toLowerCase().trim();
  const isAll =
    category?.id === "all" ||
    categorySlug === "" ||
    categorySlug === "all" ||
    categorySlug === "all books";

  const isActive = isAll
    ? !activeCategory ||
      activeCategory.toLowerCase() === "all" ||
      activeCategory.toLowerCase() === "all books"
    : activeCategory?.toLowerCase() === categorySlug;

  const handleNavigation = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (isAll) {
      params.delete("category");
    } else if (isActive) {
      // Toggle off back to all books
      params.delete("category");
    } else {
      params.set("category", categorySlug);
    }

    const newQuery = params.toString();
    router.push(newQuery ? `/all-books?${newQuery}` : "/all-books", {
      scroll: false,
    });
  };

  return (
    <button
      type="button"
      onClick={handleNavigation}
      className={`inline-flex items-center justify-between gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
        isActive
          ? "bg-amber-500 text-white shadow-md shadow-amber-500/25 font-bold border border-amber-500"
          : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
      } ${className}`}
    >
      <div className="flex items-center gap-1.5 truncate">
        {isActive && <FiCheck className="size-3.5 shrink-0 text-white" />}
        <span className="truncate">{category.name}</span>
      </div>
      {count !== undefined && (
        <span
          className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
            isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
};

export default ActiveCategoryBtn;
