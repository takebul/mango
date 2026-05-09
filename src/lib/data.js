export const getBooks = async () => {
  const res = await fetch("https://mango-json-server.onrender.com/books");
  const books = await res.json();
  return books;
};

export const getBookDetails = async (id) => {
  const res = await fetch(`https://mango-json-server.onrender.com/books/${id}`);
  const books = await res.json();
  return books;
};

export const getBooksCategories = async () => {
  const res = await fetch("https://mango-json-server.onrender.com/categories");
  const categories = await res.json();
  return categories;
};

export const getSearchBooks = async (search = "") => {
  console.log(search, "searchFetch");
  const res = await fetch(`https://mango-json-server.onrender.com/books`);
  const books = await res.json();

  const searchTitle = books.filter((book) =>
    book.title.toLowerCase().includes(search),
  );

  return searchTitle;
};

export const getBookReviews = async () => {
  const res = await fetch("https://mango-json-server.onrender.com/reviews");
  const reviews = await res.json();
  return reviews;
};
