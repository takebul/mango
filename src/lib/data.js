export const getBooks = async () => {
  const res = await fetch("https://mango-json-server.onrender.com/books");
  const books = await res.json();
  return books;
};
