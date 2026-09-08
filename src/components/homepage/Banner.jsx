"use client";

import heroBannerImg from "@/assets/books/hero-banner.jpg";
import Image from "next/image";
import Link from "next/link";
import {
  FiBookOpen,
  FiArrowRight,
  FiCheckCircle,
  FiStar,
  FiCompass,
} from "react-icons/fi";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-orange-50/20 to-white py-14 sm:py-20 md:py-24 border-b border-slate-100">
      {/* Soft ambient background glows */}
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 -z-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 -z-10 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Clean, Elegant, Executive Hero Typography */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Minimalist Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-300/60 text-amber-900 text-xs font-semibold tracking-wide shadow-2xs">
              <span className="size-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Digital Library &amp; Free Book Lending</span>
            </div>

            {/* Confident, High-Impact Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Your Next Great Read,{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
                Completely Free.
              </span>
            </h1>

            {/* Crisp, Professional Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Borrow from 45+ handpicked masterpieces across classic literature, software engineering, and groundbreaking science. Zero subscription fees, instant 14-day free borrowing.
            </p>

            {/* Clean, Prominent Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/all-books"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white mango-btn-gradient rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
              >
                <FiBookOpen className="size-5" />
                <span>Explore All Books</span>
                <FiArrowRight className="size-4" />
              </Link>
              <Link
                href="/profile"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-2xl shadow-xs hover:border-amber-300 hover:text-amber-600 transition-all duration-200"
              >
                <FiCompass className="size-5 text-amber-500" />
                <span>My Bookshelf</span>
              </Link>
            </div>

            {/* Clean Minimalist Value Signals */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="size-4 text-emerald-500 shrink-0" />
                <span>100% Free Lending</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="size-4 text-emerald-500 shrink-0" />
                <span>14-Day Free Period</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="size-4 text-emerald-500 shrink-0" />
                <span>45+ Curated Titles</span>
              </div>
            </div>

            {/* Understated Social Proof */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 border-t border-slate-200/60 max-w-md mx-auto lg:mx-0">
              <div className="flex -space-x-2">
                <span className="inline-flex items-center justify-center size-7 rounded-full ring-2 ring-white bg-amber-500 text-[10px] font-bold text-white">
                  ER
                </span>
                <span className="inline-flex items-center justify-center size-7 rounded-full ring-2 ring-white bg-indigo-500 text-[10px] font-bold text-white">
                  MC
                </span>
                <span className="inline-flex items-center justify-center size-7 rounded-full ring-2 ring-white bg-emerald-500 text-[10px] font-bold text-white">
                  SJ
                </span>
              </div>
              <div className="text-xs text-slate-600 flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  <FiStar className="size-3.5 fill-amber-400 text-amber-400" />
                  <FiStar className="size-3.5 fill-amber-400 text-amber-400" />
                  <FiStar className="size-3.5 fill-amber-400 text-amber-400" />
                  <FiStar className="size-3.5 fill-amber-400 text-amber-400" />
                  <FiStar className="size-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span className="font-bold text-slate-800">4.9 / 5</span>
                <span className="text-slate-400 font-normal">from 5,000+ avid readers</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Artwork Showcase with Floating Glass Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-4/3 rounded-3xl p-3 bg-gradient-to-tr from-amber-400/20 via-white to-orange-300/20 border border-amber-200/80 shadow-2xl shadow-amber-500/15 group">
              {/* Soft Outer Halo Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-400 to-orange-400 opacity-20 blur-xl group-hover:opacity-30 transition duration-700 pointer-events-none" />

              {/* Main Artwork Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner bg-amber-50/50">
                <Image
                  src={heroBannerImg}
                  alt="Mango Books 3D Library Collection"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Glassmorphic Badge: Bottom Left */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-4 sm:-left-4 px-4 py-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-amber-100 flex items-center gap-3">
                <div className="size-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-md shadow-amber-500/25 shrink-0">
                  <FiBookOpen className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Free Instant Borrowing</p>
                  <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    <span>14-Day Free Reading Period</span>
                  </p>
                </div>
              </div>

              {/* Floating Glassmorphic Badge: Top Right */}
              <div className="absolute -top-3 -right-2 sm:-top-3 sm:-right-3 px-3.5 py-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-amber-100 flex items-center gap-2">
                <div className="size-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-slate-800">45 Curated Volumes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
