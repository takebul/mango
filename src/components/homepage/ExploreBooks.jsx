import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCompass } from "react-icons/fi";
import storyImg from "@/assets/books/story-category-books.png";
import techImg from "@/assets/books/tech-category-books.png";
import scienceImg from "@/assets/books/science-category-books.png";

const categories = [
  {
    id: "story",
    title: "Fiction & Stories",
    subtitle: "Heartfelt drama, mysteries, and timeless narratives",
    image: storyImg,
    badge: "Most Popular",
    color: "from-amber-500/20 to-orange-500/10",
    border: "group-hover:border-amber-400",
    link: "/all-books?category=story",
  },
  {
    id: "tech",
    title: "Technology & Code",
    subtitle: "AI, cloud architectures, algorithms, and systems engineering",
    image: techImg,
    badge: "Top Rated",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "group-hover:border-blue-400",
    link: "/all-books?category=tech",
  },
  {
    id: "science",
    title: "Science & Physics",
    subtitle: "Cosmology, quantum fields, evolutionary biology & research",
    image: scienceImg,
    badge: "Trending",
    color: "from-purple-500/20 to-indigo-500/10",
    border: "group-hover:border-purple-400",
    link: "/all-books?category=science",
  },
];

const ExploreBooks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            <FiCompass className="size-4" />
            <span>Curated Collections</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explore Books by Genre
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            From deep technological insights to captivating stories and cosmic wonders, find the exact knowledge you crave.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.link}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br ${cat.color} p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 ${cat.border} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-xs border border-slate-200/60">
                    {cat.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 group-hover:text-amber-600 transition flex items-center gap-1">
                    <span>Explore</span>
                    <FiArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-amber-600 transition">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  {cat.subtitle}
                </p>
              </div>

              {/* Category Visual */}
              <div className="relative mt-8 aspect-[4/3] w-full flex items-center justify-center overflow-hidden rounded-2xl bg-white/70 shadow-inner p-4">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreBooks;

