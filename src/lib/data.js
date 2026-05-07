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
