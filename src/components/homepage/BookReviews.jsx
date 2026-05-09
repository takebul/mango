import { getBookReviews } from "@/lib/data";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ReviewCard from "../shared/ReviewCard";

const BookReviews = async () => {
  const bookReviews = await getBookReviews();
  return (
    <div className="relative my-10 mb-20 w-11/12 mx-auto">
      <div className="opacity-20 bg-yellow-100">
        <DotLottieReact
          src="https://lottie.host/45f3f5cd-307b-4409-9c9f-3994c0c01cba/zQUhzAxzjq.lottie"
          //   loop
          autoplay
        />
      </div>
      <div className="text-center absolute top-10 left-10 right-10">
        <h6 className="text-xl font-bold text-red-500">HAPPY READERS</h6>
        <h2 className="text-5xl font-bold">Reviews By Readers</h2>
      </div>
      <div className="absolute top-40 mb-10 left-3 right-3 grid gap-4 w-9/12 mx-auto md:grid-cols-2">
        {bookReviews.slice(0, 2).map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default BookReviews;
