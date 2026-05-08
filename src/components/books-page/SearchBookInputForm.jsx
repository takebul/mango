// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const SearchBookInputForm = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [search, setSearch] = useState(searchParams.get("search") || "");

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const params = new URLSearchParams(searchParams);

//       if (search) {
//         params.set("search", search);
//       } else {
//         params.delete("search");
//       }

//       router.push(`/books?${params.toString()}`);
//     }, 500);

//     return () => clearTimeout(timeout);
//   }, [search, router, searchParams]);

//   return (
//     <div className="my-10">
//       <input
//         type="text"
//         placeholder="Search books..."
//         className="border p-3 w-full rounded"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//     </div>
//   );
// };

// export default SearchBookInputForm;

// ------------------------------------------------------------------------

// "use client";

// import {
//   Button,
//   Description,
//   FieldError,
//   Form,
//   Label,
//   SearchField,
//   Spinner,
// } from "@heroui/react";
// import { useRouter, useSearchParams } from "next/navigation";
// import React, { useState } from "react";

// const SearchBookInputForm = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const handleSearch = (e) => {
//     const value = e.target.value;

//     const params = new URLSearchParams(searchParams);

//     params.set("search", value);

//     router.push(`/books?${params.toString()}`);
//   };

//   const [value, setValue] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const MIN_LENGTH = 3;
//   const isInvalid = value.length > 0 && value.length < MIN_LENGTH;

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (value.length < MIN_LENGTH) {
//       return;
//     }

//     setIsSubmitting(true);

//     // Simulate API call
//     setTimeout(() => {
//       console.log("Search submitted:", { query: value });
//       setValue("");
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   return (
//     <div className="my-10">
//       <Form
//         className="flex w-200 mx-auto flex-col gap-4"
//         onSubmit={handleSubmit}
//       >
//         <SearchField
//           isRequired
//           isInvalid={isInvalid}
//           name="search"
//           value={value}
//           onChange={setValue}
//         >
//           <Label>Search products</Label>
//           <SearchField.Group>
//             <SearchField.SearchIcon />
//             <SearchField.Input
//               onChange={handleSearch}
//               className="w-full"
//               placeholder="Search products..."
//               //   defaultValue={searchParams.get("search") || ""}
//             />
//             <SearchField.ClearButton />
//           </SearchField.Group>
//           {isInvalid ? (
//             <FieldError>
//               Search query must be at least {MIN_LENGTH} characters
//             </FieldError>
//           ) : (
//             <Description>
//               Enter at least {MIN_LENGTH} characters to search
//             </Description>
//           )}
//         </SearchField>
//         <Button
//           onClick={handleSearch}
//           className="w-full"
//           isDisabled={value.length < MIN_LENGTH}
//           isPending={isSubmitting}
//           type="submit"
//           variant="primary"
//         >
//           {isSubmitting ? (
//             <>
//               <Spinner color="current" size="sm" />
//               Searching...
//             </>
//           ) : (
//             "Search"
//           )}
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default SearchBookInputForm;
