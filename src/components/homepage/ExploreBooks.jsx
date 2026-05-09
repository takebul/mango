import { Button } from "@heroui/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const ExploreBooks = () => {
  return (
    <div className="my-20 py-10 bg-radial-[at_50%_75%] from-amber-300 via-purple-500 to-indigo-900 to-90% w-11/12 mx-auto rounded-md">
      <div className="w-11/12 mx-auto">
        <h1 className="text-center font-bold text-3xl text-white md:text-5xl">
          Explore All Books & Earn lots of ideas
        </h1>
        <p className="text-gray-200 text-center pt-3">
          Unlock a world of wisdom by exploring a diverse collection of
          must-read books. <br /> Turn every page into a fresh perspective and{" "}
          <br /> watch your best ideas come to life.
        </p>
      </div>
      <div className="relative">
        <DotLottieReact
          src="https://lottie.host/e56fcba1-ab57-47b9-ab20-09b908c4a1f0/fziENRpUrQ.lottie"
          loop
          autoplay
        />
        <div className="absolute top-1 left-1 w-40 md:w-65 lg:w-100">
          <DotLottieReact
            src="https://lottie.host/450bc36d-54a5-4c02-aee4-09720203e060/BAv43rUao2.lottie"
            loop
            autoplay
          />
        </div>
        <div className="absolute top-1 right-0 w-40 md:w-65 lg:w-100">
          <DotLottieReact
            src="https://lottie.host/40d55878-2fde-4a40-84b8-519cfb492c3e/pHe6ExwMuI.lottie"
            loop
            autoplay
          />
        </div>
      </div>
      <div className="text-center">
        <Link href={"/all-books"}>
          <Button>Explore Books</Button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreBooks;
