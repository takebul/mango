import Banner from "@/components/homepage/Banner";
import MarqueePage from "@/components/homepage/Marquee";
import SwiperPage from "@/components/shared/Swiper";
import ExploreBooks from "@/components/homepage/ExploreBooks";
import FeaturedBooks from "@/components/homepage/FeaturedBooks";
import BookReviews from "@/components/homepage/BookReviews";
import { getBooks } from "@/lib/data";

const Home = async () => {
  const books = await getBooks();

  return (
    <main className="flex-1">
      {/* 1. High Impact Hero Section */}
      <Banner />

      {/* 2. Breaking Announcement Ribbon */}
      <MarqueePage />

      {/* 3. Trending Books Carousel */}
      <SwiperPage books={books} />

      {/* 4. Genre / Category Showcase */}
      <ExploreBooks />

      {/* 5. Featured / Curated Grid */}
      <FeaturedBooks />

      {/* 6. Community Testimonials */}
      <BookReviews />
    </main>
  );
};

export default Home;

