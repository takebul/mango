import { useMemo, useSyncExternalStore } from "react";

// Persistent client-side borrow management store for Mango Books
const STORAGE_PREFIX = "mango_borrowed_v1_";

function getStorageKey(user) {
  if (!user) return `${STORAGE_PREFIX}guest`;
  if (typeof user === "string") return `${STORAGE_PREFIX}${user}`;
  const id = user.id || user.email || user._id || "guest";
  return `${STORAGE_PREFIX}${id}`;
}

export function getBorrowedBooks(user) {
  if (typeof window === "undefined") return [];
  const key = getStorageKey(user);

  // If user is authenticated, migrate any guest books into user store
  if (user && key !== `${STORAGE_PREFIX}guest`) {
    try {
      const guestRaw = localStorage.getItem(`${STORAGE_PREFIX}guest`);
      if (guestRaw) {
        const guestBooks = JSON.parse(guestRaw);
        if (Array.isArray(guestBooks) && guestBooks.length > 0) {
          const userRaw = localStorage.getItem(key);
          const userBooks = userRaw ? JSON.parse(userRaw) : [];
          const merged = [...userBooks];
          guestBooks.forEach((gb) => {
            if (!merged.some((b) => String(b.id) === String(gb.id))) {
              merged.push(gb);
            }
          });
          localStorage.setItem(key, JSON.stringify(merged));
          localStorage.removeItem(`${STORAGE_PREFIX}guest`);
        }
      }
    } catch {
      // Ignore migration error
    }
  }

  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const books = JSON.parse(raw);
    if (!Array.isArray(books)) return [];

    const now = Date.now();
    return books.map((item) => {
      const due = item.dueDate ? new Date(item.dueDate).getTime() : now + 14 * 86400000;
      const msLeft = due - now;
      const daysRemaining = Math.max(0, Math.ceil(msLeft / (1000 * 60 * 60 * 24)));
      return {
        ...item,
        daysRemaining: daysRemaining || 1,
      };
    });
  } catch {
    return [];
  }
}

export function isBookBorrowed(user, bookId) {
  if (!bookId) return false;
  const books = getBorrowedBooks(user);
  const targetId = String(bookId);
  return books.some((b) => String(b.id) === targetId);
}

export function borrowBook(user, book) {
  if (typeof window === "undefined" || !book) return false;
  const key = getStorageKey(user);

  try {
    const existing = getBorrowedBooks(user);
    const targetId = String(book.id || book._id);

    if (existing.some((b) => String(b.id) === targetId)) {
      return true; // Already borrowed
    }

    const borrowedAt = new Date().toISOString();
    const dueDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString();

    const record = {
      id: targetId,
      title: book.title || "Untitled Book",
      author: book.author || "Unknown Author",
      category: book.category || "General",
      imageUrl: book.imageUrl || "",
      pages: book.pages || 350,
      borrowedAt,
      dueDate,
      daysRemaining: 14,
    };

    const updated = [record, ...existing];
    localStorage.setItem(key, JSON.stringify(updated));

    // Notify all listening components
    window.dispatchEvent(
      new CustomEvent("mango:borrow-updated", {
        detail: { bookId: targetId, action: "borrow", book: record },
      })
    );
    return true;
  } catch {
    return false;
  }
}

export function returnBook(user, bookId) {
  if (typeof window === "undefined" || !bookId) return false;
  const key = getStorageKey(user);
  if (!key) return false;

  try {
    const existing = getBorrowedBooks(user);
    const targetId = String(bookId);
    const updated = existing.filter((b) => String(b.id) !== targetId);

    localStorage.setItem(key, JSON.stringify(updated));

    // Notify all listening components
    window.dispatchEvent(
      new CustomEvent("mango:borrow-updated", {
        detail: { bookId: targetId, action: "return" },
      })
    );
    return true;
  } catch {
    return false;
  }
}

export function subscribeBorrowUpdates(callback) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("mango:borrow-updated", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("mango:borrow-updated", callback);
    window.removeEventListener("storage", callback);
  };
}

export function useBorrowedBooks(user) {
  const raw = useSyncExternalStore(
    subscribeBorrowUpdates,
    () => {
      const key = getStorageKey(user);
      return localStorage.getItem(key) || "[]";
    },
    () => "[]"
  );

  return useMemo(() => {
    if (!raw) return [];
    return getBorrowedBooks(user);
  }, [user, raw]);
}

export function useIsBookBorrowed(user, bookId) {
  const targetId = String(bookId || "");
  return useSyncExternalStore(
    subscribeBorrowUpdates,
    () => (targetId ? isBookBorrowed(user, targetId) : false),
    () => false
  );
}
