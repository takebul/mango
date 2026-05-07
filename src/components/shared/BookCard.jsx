import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { FaStore } from "react-icons/fa6";

const BookCard = ({ book }) => {
  return (
    <div className="border p-4 rounded-md shadow-lg bg-slate-100">
      <div className="relative aspect-square">
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
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{book.title} </h2>
        <p className="text-lg text-gray-700 font-semibold">{book.author} </p>
        <p className="text-green-500">
          Product In Stock:{" "}
          <span className="text-red-500">({book.available_quantity})</span>{" "}
        </p>
      </div>
      <Button
        size="md"
        variant="secondary"
        className={"mt-3 w-full rounded-md"}
      >
        View Details
      </Button>
    </div>
  );
};

export default BookCard;
