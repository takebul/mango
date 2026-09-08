import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiMail, FiBookOpen, FiShield, FiHeart, FiGlobe, FiExternalLink } from "react-icons/fi";
import Logo from "../shared/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-300 border-t border-slate-800 transition-all">
      {/* Top Newsletter & Benefits strip */}
      <div className="border-b border-slate-800/80 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <FiBookOpen className="size-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Free Book Borrowing</h4>
                <p className="text-xs text-slate-400">Read online and borrow instantly from anywhere</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <FiShield className="size-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Verified & Secure</h4>
                <p className="text-xs text-slate-400">Authentic editions curated for passionate readers</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <FiHeart className="size-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Active Community</h4>
                <p className="text-xs text-slate-400">Join thousands of book lovers sharing reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="dark" size="md" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Mango is a premier digital borrowing platform built for curious minds. Discover timeless stories, next-generation technology guides, and breakthrough scientific discoveries.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <span className="text-amber-400 font-semibold">Email:</span>{" "}
                <a
                  href="mailto:takebulislam@gmail.com"
                  className="hover:text-amber-400 transition underline underline-offset-2"
                >
                  takebulislam@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-400 font-semibold">Portfolio:</span>{" "}
                <Link
                  href="https://takebulislam.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition underline underline-offset-2"
                >
                  takebulislam.vercel.app
                </Link>
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">Categories</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/all-books?category=story" className="hover:text-amber-400 transition">
                  Stories & Fiction
                </Link>
              </li>
              <li>
                <Link href="/all-books?category=tech" className="hover:text-amber-400 transition">
                  Technology & AI
                </Link>
              </li>
              <li>
                <Link href="/all-books?category=science" className="hover:text-amber-400 transition">
                  Science & Physics
                </Link>
              </li>
              <li>
                <Link href="/all-books" className="hover:text-amber-400 transition">
                  All Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">Platform</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/all-books" className="hover:text-amber-400 transition">
                  Browse Catalog
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-amber-400 transition">
                  My Library & Account
                </Link>
              </li>
              <li>
                <Link href="/signin" className="hover:text-amber-400 transition">
                  Member Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="https://takebulislam.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition inline-flex items-center gap-1.5 text-amber-300 font-medium"
                >
                  <span>Developer Portfolio</span>
                  <FiExternalLink className="size-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">Stay Updated</h4>
            <p className="text-xs text-slate-400">Get notified about new arrivals, author highlights & member perks.</p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                readOnly
                value="subscriber@mangobooks.org"
              />
              <button
                type="button"
                className="px-3 py-2 text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-lg transition"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Mango Book Platform. Developed by{" "}
            <Link
              href="https://takebulislam.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2"
            >
              Takebul Islam
            </Link>
            .
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link
              href="mailto:takebulislam@gmail.com"
              className="hover:text-amber-400 transition p-1.5 rounded-lg hover:bg-slate-900"
              aria-label="Email"
              title="Email: takebulislam@gmail.com"
            >
              <FiMail size={18} />
            </Link>
            <Link
              href="https://github.com/takebul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition p-1.5 rounded-lg hover:bg-slate-900"
              aria-label="GitHub"
              title="GitHub: takebul"
            >
              <FaGithub size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/takebulislam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition p-1.5 rounded-lg hover:bg-slate-900"
              aria-label="LinkedIn"
              title="LinkedIn: takebulislam"
            >
              <FaLinkedin size={18} />
            </Link>
            <Link
              href="https://takebulislam.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 hover:border-amber-400/60 text-slate-300 hover:text-amber-300 transition"
              title="Developer Portfolio"
            >
              <FiGlobe className="size-3.5 text-amber-400" />
              <span className="font-semibold text-[11px]">Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

