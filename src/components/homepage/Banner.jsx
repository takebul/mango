import allBooksImg from "@/assets/books/all-books.png";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="relative bg-neutral-700">
        <Image
          className="w-full md:h-[88vh]  mx-auto opacity-30 z-10 "
          src={allBooksImg}
          width={300}
          height={300}
          alt="Banner Image"
        />
        <div className="absolute flex flex-col items-center text-center space-y-4 top-2 left-10 right-10 sm:top-12 md:top-14 lg:top-18 xl:top-30">
          <h1 className="absolute text-white font-bold text-center text-xl sm:text-2xl md:text-4xl lg:text-6xl">
            Discover Our Best-Selling <br /> Collection
          </h1>
          <p className="absolute text-slate-200 top-13 text-sm sm:top-18 md:top-22  lg:top-36">
            Explore our curated collection of best-sellers, from heart-pounding
            stories and <br /> gripping mysteries to groundbreaking tech and
            science guides. <br /> expand your horizons with the latest in
            literature.
          </p>
          <div className="absolute top-38 md:top-52  lg:top-64">
            <Link href={"all-books"}>
              <Button size="xs sm:sm" className={"rounded-sm"}>
                Browse Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
