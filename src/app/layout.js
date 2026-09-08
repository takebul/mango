import dns from "node:dns";
if (typeof dns?.setServers === "function") {
  try {
    dns.setServers(["8.8.8.8", "8.8.4.4"]); // Google DNS fallback for Mongo SRV lookup
  } catch {
    // Ignore if not permitted
  }
}

import { Manrope } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata = {
  title: {
    default: "Mango — Modern Book Borrowing & Community Platform",
    template: "%s | Mango Books",
  },
  description:
    "Explore, borrow, and discover thousands of books across Fiction, Technology, and Science. Your premier digital library and community for book lovers.",
  keywords: [
    "Mango",
    "Books",
    "Borrow Books",
    "Library",
    "Tech Books",
    "Fiction",
    "Science",
    "Reading",
  ],
  authors: [{ name: "Mango Team" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950">
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </body>
    </html>
  );
}

