import { getBooks } from "@/lib/data";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { FiZap, FiTag } from "react-icons/fi";

const MarqueePage = async () => {
  const books = await getBooks();

  return (
    <div className="bg-slate-900 text-white border-y border-slate-800 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
        {/* Left Badge */}
        <div className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-xs tracking-wider uppercase shadow-xs">
          <FiZap className="size-3.5 fill-current" />
          <span>New Arrivals</span>
        </div>

        {/* Marquee Track */}
        <Marquee pauseOnHover speed={45} gradient={false} className="py-0.5">
          <div className="flex items-center gap-8 pl-4">
            {books.slice(0, 8).map((book) => {
              const discount = book.discount;
              return (
                <Link
                  key={`marquee-${book.id}`}
                  href={`/books/${book.id}`}
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 hover:text-amber-400 transition group"
                >
                  <span className="font-bold text-white group-hover:text-amber-400 transition">
                    {book.title}
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[11px] font-semibold text-amber-400 border border-slate-700">
                    {book.category}
                  </span>
                  {discount && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/60">
                      <FiTag className="size-3" />
                      <span>{discount} OFF</span>
                    </span>
                  )}
                  <span className="text-slate-600 pl-4">✦</span>
                </Link>
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueePage;

