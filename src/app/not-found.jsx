import Link from "next/link";
import { FiBookOpen, FiArrowLeft, FiCompass } from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-500">
          <FiBookOpen className="size-12" />
        </div>
        <span className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-rose-600 text-white font-black text-xs shadow-md">
          404
        </span>
      </div>

      <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
        Page Lost in the Stacks
      </h1>
      <p className="text-slate-500 max-w-md mx-auto mt-3 text-sm sm:text-base leading-relaxed">
        The book or page you are looking for might have been moved, renamed, or is temporarily unavailable in our library archive.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white mango-btn-gradient shadow-md shadow-amber-500/20 transition-transform hover:scale-[1.02]"
        >
          <FiArrowLeft className="size-4" />
          <span>Back to Home</span>
        </Link>
        <Link
          href="/all-books"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition shadow-xs"
        >
          <FiCompass className="size-4 text-amber-500" />
          <span>Browse Catalog</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

