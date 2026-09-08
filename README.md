<div align="center">

# 🥭 Mango Books
### *Modern Community Digital Library & Free Book Borrowing Platform*

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4_(Turbopack)-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![HeroUI](https://img.shields.io/badge/HeroUI-v3.0.3-000000?style=for-the-badge&logo=nextui&logoColor=white)](https://heroui.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Native_Driver-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Better Auth](https://img.shields.io/badge/Better_Auth-v1.6.9-F59E0B?style=for-the-badge&logo=auth0&logoColor=white)](https://better-auth.com/)
[![Live Demo](https://img.shields.io/badge/Live_Demo-mango--books--platform.vercel.app-0070F3?style=for-the-badge&logo=vercel&logoColor=white)](https://mango-books-platform.vercel.app)
[![ESLint](https://img.shields.io/badge/ESLint-Clean_Pass_(0_Errors)-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

<br />

**[🚀 Live Website (Vercel)](https://mango-books-platform.vercel.app)** • **[📡 Mock API (Render)](https://mango-json-server.onrender.com)** • **[📖 Features](#-key-features)** • **[🛠️ Quick Start](#-getting-started)** • **[📬 Contact](#-developer--contact)**

</div>

---

## 🌐 Live Deployments

| Component | Environment / Host | Production Link |
| :--- | :--- | :--- |
| **Frontend Application** | **Vercel** | [**https://mango-books-platform.vercel.app**](https://mango-books-platform.vercel.app) |
| **Backend Mock REST Server** | **Render** | [**https://mango-json-server.onrender.com**](https://mango-json-server.onrender.com) |

---

## 📌 Overview

**Mango Books** is a modern, full-stack digital library and community book borrowing platform designed for book lovers, developers, and researchers. Users can discover, search, filter, and borrow from a curated catalog of **45+ celebrated masterpieces** spanning classic literature, deep software engineering, and frontier science — **100% free of charge**.

Built with the latest **Next.js 16.2.4 (Turbopack)**, **React 19**, and **Tailwind CSS v4**, Mango Books combines high-speed server-rendered performance, persistent client-side lending workflows, and an eye-catching aesthetic inspired by modern reading sanctuaries.

---

## ✨ Key Features

### 📚 1. Comprehensive 45-Book Curated Catalog
- **3 Balanced Core Genres**: Exactly 15 Fiction/Story books, 15 Technology guides, and 15 Science volumes.
- **Authentic Metadata & Artwork**: Every title features original ISBN-matched cover art served via high-speed CloudFront CDN, real authors, realistic page counts, ratings (4.6–5.0), and availability stock.

### 🔄 2. Persistent Client-Side Borrowing Engine
- **Survives Page Reloads**: Built with React 19's `useSyncExternalStore` and `localStorage`, ensuring borrowed books remain active across browser reloads and navigation.
- **Cross-Tab Synchronization**: Real-time event propagation syncs borrowing states instantly across multiple tabs and components without hydration mismatch.
- **14-Day Free Loan Period**: Automatic loan duration tracking, active loan counters, and an intuitive "Return Early" option.
- **Guest-to-Account Migration**: Borrow as a guest, and your shelf automatically links when you register or sign in.

### 🔍 3. Side-by-Side Search & Category Filters
- **Unified Control Panel**: Search bar and category filter pills sit side-by-side in a responsive toolbar.
- **Multi-Field Instant Search**: Real-time filtering by book title, author, or genre with instant feedback.
- **Smart Category Filtering**: One-click genre filtering with dynamic book count badges and a single-click filter reset.

### 👤 4. Personalized Reader Profile & Bookshelf
- **Dynamic Reader Statistics**: Real-time counters showing active borrowed loans, reading tier, and account status.
- **Active Shelf & Due Dates**: Displays borrowed books with covers, category badges, countdown timers, and direct return triggers.
- **Polished Empty State**: Clear, encouraging empty state message with a direct call-to-action when no books are borrowed.

### 🔐 5. Robust Authentication & Route Protection
- **Better Auth with MongoDB Adapter**: Secure credential-based sign-up and sign-in with session cookie management.
- **Next.js 16 Proxy Architecture**: High-performance route protection via [`src/proxy.js`](src/proxy.js), smoothly redirecting unauthenticated visitors to `/signin` with automatic `callbackUrl` return.

### 🎨 6. Executive-Level Design & Micro-Interactions
- **Bespoke 3D Brand Logo**: Custom golden mango and glowing book pages emblem with smooth hover physics.
- **Atmospheric Hero Banner**: Warm amber lighting, 3D embossed artwork, high-impact typography, and trust badges.
- **Fluid Carousel & Marquee**: Multi-card responsive Swiper spotlight slider and live news ticker ribbon.
- **Realistic Book Mockup Skeleton**: Shimmering book-spine loading placeholder replacing plain loading text.

### 🛡️ 7. Zero-Failure Data Resiliency
- **Automated Fallback Architecture**: A 3.5-second timeout safety net ensures that if the remote mock server is cold-starting or sleeping, the application automatically falls back to [`src/lib/local-db.json`](src/lib/local-db.json) with zero user-facing downtime.

---

## 🏗️ Architecture & Data Flow

```mermaid
flowchart TD
    User([Reader / Client]) -->|Requests Page| Next[Next.js 16 App Router]
    Next --> Proxy[Proxy Route Guard: src/proxy.js]
    
    Proxy -->|Protected /profile| AuthCheck{Authenticated?}
    AuthCheck -->|No| Redirect[/signin?callbackUrl=...]
    AuthCheck -->|Yes| ProfilePage[Reader Profile Shelf]
    
    Proxy -->|Public Catalog| DataLayer[Data Service: src/lib/data.js]
    DataLayer --> FetchRemote[Fetch Remote API: Render JSON-Server]
    FetchRemote -->|Timeout 3.5s or Network Error| Fallback[Local Database: src/lib/local-db.json]
    FetchRemote -->|Success 200| Merge[Merge & Deduplicate 45 Books]
    Fallback --> Merge
    
    Merge --> UI[Render Modern Book Grid / Detail Pages]
    UI --> BorrowStore[(Client Borrow Store: useSyncExternalStore)]
    BorrowStore <--> LocalStorage[(Browser LocalStorage)]
    BorrowStore --> ProfilePage
```

---

## 💻 Tech Stack & Dependencies

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.2.4](https://nextjs.org/) | React App Router, Turbopack, Server-Side Rendering (SSR) |
| **Library** | [React 19.2.4](https://react.dev/) | Core UI rendering with `useSyncExternalStore` & `useMemo` |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS design system |
| **UI Components** | [HeroUI v3](https://heroui.com/) | Accessible, polished UI elements and inputs |
| **Authentication** | [Better Auth v1.6.9](https://better-auth.com/) | Authentication engine with session handling |
| **Database** | [MongoDB Native Driver v7.2](https://www.mongodb.com/) | Persistent user account storage & adapter integration |
| **Carousel & Slider** | [Swiper v12.1](https://swiperjs.com/) | Multi-card touch-friendly spotlight carousel |
| **Ticker Ribbon** | [React Fast Marquee v1.6](https://www.react-fast-marquee.com/) | Smooth announcement marquee |
| **Notifications** | [React-Toastify v11.1](https://fkhadra.github.io/react-toastify/) | Animated non-blocking toast alerts |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) & [Iconify](https://iconify.design/) | Feather (`Fi*`), Simple Icons (`Si*`), and vector glyphs |
| **Image Processing** | [Sharp v0.34](https://sharp.pixelplumbing.com/) | High-performance icon and favicon optimization |

---

## 📂 Project Structure

```text
mango/
├── public/                       # Static public assets (zero clutter, clean SVG icons)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                      # Next.js 16 App Router
│   │   ├── (auth)/               # Auth route group
│   │   │   ├── signin/page.jsx   # Member Sign-In with Suspense
│   │   │   └── signup/page.jsx   # Member Registration
│   │   ├── (main)/               # Main application layout group
│   │   │   ├── all-books/        # Full 45-book catalog & side-by-side filters
│   │   │   ├── books/[id]/       # Book detail & lending interface
│   │   │   ├── profile/          # Reader dashboard & active borrowed bookshelf
│   │   │   ├── layout.js         # Navigation header & footer shell
│   │   │   └── page.js           # Homepage
│   │   ├── favicon.ico           # Multi-size 32-bit RGBA platform favicon
│   │   ├── icon.svg              # Scalable vector tab icon
│   │   ├── icon.png              # Standard PNG web icon
│   │   ├── apple-icon.png        # High-res iOS touch icon
│   │   ├── globals.css           # Tailwind CSS v4 & custom design tokens
│   │   └── layout.js             # Root layout with Google font & ToastContainer
│   ├── assets/                   # High-res internal artwork
│   │   ├── books/                # Hero banner & category illustrations
│   │   └── logo.png              # 512x512 3D Mango Books emblem
│   ├── components/
│   │   ├── books-page/           # Catalog grid, BookFilterBar, CategorySidebar
│   │   ├── homepage/             # Banner, Marquee, ExploreBooks, FeaturedBooks, Footer
│   │   ├── profile-page/         # EditProfile modal
│   │   └── shared/               # Logo, Navbar, BookCard, BookCoverImage, BorrowBookBtn
│   ├── lib/
│   │   ├── auth.js               # Server-side Better Auth & MongoDB initialization
│   │   ├── auth-client.js        # Client-side auth session hook
│   │   ├── borrow-store.js       # Persistent lending store (useSyncExternalStore)
│   │   ├── data.js               # Resilient data fetching & fallback logic
│   │   └── local-db.json         # 45 curated books with verified metadata & CDN URLs
│   └── proxy.js                  # Next.js 16 Route Protection proxy
├── next.config.mjs               # Remote image domain whitelist configuration
├── package.json                  # Dependencies & execution scripts
└── README.md                     # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to clone, configure, and run the project locally.

### 1. Prerequisites
- **Node.js**: `v18.18.0` or later (Node.js 20+ / 24+ recommended)
- **npm**: `v9.0.0` or later
- **MongoDB**: A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster URI or local MongoDB instance

### 2. Clone the Repository
```bash
git clone https://github.com/takebul/A08-Mango.git
cd A08-Mango/mango
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env.local` (or `.env`) file in the `mango/` root directory:

```env
# Better Auth Configuration
BETTER_AUTH_SECRET=your_super_secret_key_at_least_32_characters_long
BETTER_AUTH_URL=http://localhost:3000

# MongoDB Connection String
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mango_books?retryWrites=true&w=majority
```

### 5. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with live hot-reloading.

### 6. Production Build & Linting
```bash
# Run ESLint quality audit
npm run lint

# Compile optimized production bundle with Turbopack
npm run build

# Start the production server
npm start
```

---

## 📡 Remote API Reference

The project integrates with a hosted REST mock server with automatic local fallback:

- **Base URL**: [`https://mango-json-server.onrender.com`](https://mango-json-server.onrender.com)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/books` | Retrieve the books catalog |
| `GET` | `/books/:id` | Retrieve single book details by ID |
| `GET` | `/categories` | Retrieve all book categories (Story, Tech, Science) |
| `GET` | `/reviews` | Retrieve reader testimonials and ratings |

---

## 👨‍💻 Developer & Contact

**Takebul Islam**  
*Full-Stack Web Developer & Software Engineer*

- **Portfolio**: [takebulislam.vercel.app](https://takebulislam.vercel.app)
- **Email**: [takebulislam@gmail.com](mailto:takebulislam@gmail.com)
- **GitHub**: [@takebul](https://github.com/takebul)
- **LinkedIn**: [in/takebulislam](https://www.linkedin.com/in/takebulislam)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to explore, customize, and build upon it!
