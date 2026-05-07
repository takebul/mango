import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import BorrowBookBtn from "./BorrowBookBtn";

const BookDetails = ({ book }) => {
  return (
    <div>
      <div className="p-4 rounded-md bg-slate-100 md:grid grid-cols-2 gap-6">
        <div className="border p-4 rounded-md shadow-sm">
          <div className="relative aspect-video">
            <Image
              className="w-full absolute object-cover rounded-md"
              src={book.imageUrl}
              fill
              alt={book.author}
            />
            <Chip
              variant="soft"
              color="success"
              className="absolute top-2 right-2 border border-green-100 bg-none font-bold text-white"
            >
              {book.category}{" "}
            </Chip>
            <Chip
              size="lg"
              variant="soft"
              color="danger"
              className="absolute top-2 left-2 bg-none font-bold text-red-500 text-left"
            >
              {book.discount} OFF{" "}
            </Chip>
          </div>
        </div>

        <div className="mr-2 lg:mr-30">
          <div className=" mt-4 space-y-4">
            <h2 className="text-xl font-semibold">{book.title} </h2>
            <p>
              <span className="text-gray-600">by</span>{" "}
              <span className="text-lg font-medium text-purple-500">
                {book.author}
              </span>
            </p>

            <p>
              <span className="text-gray-600">Book category: </span>{" "}
              <span className="text-lg font-medium text-red-500">
                {book.category}
              </span>
            </p>

            <p>
              <span className="font-semibold text-lg text-neutral-700">
                Description:{" "}
              </span>
              <span className="text-neutral-500">{book.description}</span>
            </p>

            <p className="text-green-500">
              Product In Stock:{" "}
              <span className="text-red-500">
                ({book.available_quantity})
              </span>{" "}
            </p>
          </div>

          <BorrowBookBtn />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
