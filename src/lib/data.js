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

// export const getSearchBooks = async (search = "") => {
//   const res = await fetch(
//     `https://mango-json-server.onrender.com/books?title_like=${search}`,
//     // { cache: "no-store" },
//   );
//   const books = res.json();

//   return books;
// };

// export const getSearchBooks = async (search) => {
//   const url = search
//     ? `https://mango-json-server.onrender.com/books?title_like=${search}`
//     : `https://mango-json-server.onrender.com/books`;

//   const res = await fetch(url, {
//     cache: "no-store",
//   });

//   return res.json();
// };
