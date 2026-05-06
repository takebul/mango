import { getBooks } from "@/lib/data";
import { Button } from "@heroui/react";
import Marquee from "react-fast-marquee";

const MarqueePage = async () => {
  const books = await getBooks();
  console.log(books);
  return (
    <div className="my-10 border shadow shadow-lime-500 p-4 w-11/12 mx-auto flex bg-slate-100 gap-2">
      <Button variant="danger" className={"rounded-sm"}>
        New Arrivals
      </Button>

      <Marquee pauseOnHover>
        <div className="flex gap-7 space-x-4 mr-4">
          {books.slice(0, 8).map((book) => (
            <div key={book.id}>
              <p className="text-xl font-semibold space-x-7">
                {book.title} | Special Discount For Memberships:{" "}
                <span className="text-red-500">{book.discount}</span>
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueePage;
