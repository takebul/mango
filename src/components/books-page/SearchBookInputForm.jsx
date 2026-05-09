"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button, Form, Label, SearchField, Spinner } from "@heroui/react";

const SearchBookInputForm = () => {
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const params = new URLSearchParams(searchParams.toString());
    params.set("search", value);
    router.push(`/all-books?${params.toString()}`);

    setIsSubmitting(false);
  };

  return (
    <div className="my-10 justify-items-center">
      <Form className="flex gap-2" onSubmit={handleSubmit}>
        <SearchField isRequired name="search" value={value} onChange={setValue}>
          <Label>Search books</Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input
              className="w-150 mx-auto"
              placeholder="Search books..."
            />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>

        <Button
          className="w-30 mt-6 rounded-md"
          isPending={isSubmitting}
          type="submit"
          variant="primary"
        >
          {isSubmitting ? (
            <>
              <Spinner color="current" size="sm" /> Searching...
            </>
          ) : (
            "Search"
          )}
        </Button>
      </Form>
    </div>
  );
};

export default SearchBookInputForm;

// "use client";

// import { getSearchBooks } from "@/lib/data";
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
//   const [searchValue, setSearchValue] = useState("");
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   console.log(searchValue, "searchValue");

//   const handleSearch = async (e) => {
//     const bookSearch = await getSearchBooks(value);

//     console.log(bookSearch, "bookSearch");

//     // const params = new URLSearchParams(searchParams);
//     // params.set("search", searchValue);
//     // router.push(`/all-books?${params.toString()}`);
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
//               value={searchValue}
//               onChange={(e) => setSearchValue(e.target.value)}
//               className="w-full"
//               placeholder="Search products..."
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
