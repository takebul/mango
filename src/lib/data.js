import localData from "./local-db.json";

const API_BASE_URL = "https://mango-json-server.onrender.com";
const TIMEOUT_MS = 3500;

// Helper to fetch with timeout and fallback
async function fetchWithFallback(endpoint, fallbackValue) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 60 },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return fallbackValue;
    }

    const data = await res.json();
    return data && Array.isArray(fallbackValue) && !Array.isArray(data)
      ? fallbackValue
      : data;
  } catch {
    // Graceful fallback on network error, Render cold-start, or timeout
    return fallbackValue;
  }
}

// Clean and normalize book data
export function sanitizeBook(book) {
  if (!book) return null;
  let discount = book.discount;
  if (discount) {
    // Strip minus signs and trim
    discount = String(discount).replace(/^-/, "").trim();
    if (!discount.endsWith("%")) {
      discount = `${discount}%`;
    }
  } else {
    discount = null;
  }

  return {
    ...book,
    discount,
    rating: book.rating || 4.8,
    available_quantity:
      typeof book.available_quantity === "number"
        ? book.available_quantity
        : Number(book.available_quantity) || 10,
  };
}

export const getBooks = async () => {
  const remoteBooks = await fetchWithFallback("/books", []);

  // Merge all 45 curated local books with any unique remote books
  const booksMap = new Map();
  (Array.isArray(localData.books) ? localData.books : []).forEach((b) => {
    booksMap.set(String(b.id), b);
  });

  if (Array.isArray(remoteBooks)) {
    remoteBooks.forEach((rb) => {
      const idKey = String(rb.id || rb._id);
      if (!booksMap.has(idKey)) {
        booksMap.set(idKey, rb);
      }
    });
  }

  return Array.from(booksMap.values()).map(sanitizeBook);
};

export const getBookDetails = async (id) => {
  const targetId = String(id);
  const localBook = (localData.books || []).find(
    (b) => String(b.id) === targetId || String(b._id) === targetId
  );

  if (localBook) {
    return sanitizeBook(localBook);
  }

  const remoteBook = await fetchWithFallback(`/books/${id}`, localData.books[0]);
  return sanitizeBook(remoteBook || localData.books[0]);
};

export const getBooksCategories = async () => {
  const allBooks = await getBooks();
  return [
    {
      id: 1,
      name: "Story",
      slug: "story",
      description: "Immersive novels, mysteries, classics & timeless narratives.",
      count: allBooks.filter((b) => b.category === "Story").length,
    },
    {
      id: 2,
      name: "Tech",
      slug: "tech",
      description: "Coding, AI, architecture, systems & digital innovation.",
      count: allBooks.filter((b) => b.category === "Tech").length,
    },
    {
      id: 3,
      name: "Science",
      slug: "science",
      description: "Physics, cosmos, biology, and scientific frontiers.",
      count: allBooks.filter((b) => b.category === "Science").length,
    },
  ];
};

export const getSearchBooks = async (search = "") => {
  const query = search ? String(search).toLowerCase().trim() : "";
  const allBooks = await getBooks();

  if (!query) {
    return allBooks;
  }

  return allBooks.filter((book) => {
    const titleMatch = book.title?.toLowerCase().includes(query);
    const authorMatch = book.author?.toLowerCase().includes(query);
    const categoryMatch = book.category?.toLowerCase().includes(query);
    return titleMatch || authorMatch || categoryMatch;
  });
};

export const getBookReviews = async () => {
  const reviews = await fetchWithFallback("/reviews", localData.reviews);
  const list = Array.isArray(reviews) && reviews.length > 0 ? reviews : localData.reviews;

  return list.map((review, idx) => ({
    id: review.id || idx + 1,
    ...review,
    rating: review.rating || 5,
  }));
};
