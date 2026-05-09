import Banner from "@/components/homepage/Banner";
import ExploreBooks from "@/components/homepage/ExploreBooks";
import FeaturedBooks from "@/components/homepage/FeaturedBooks";
import MarqueePage from "@/components/homepage/Marquee";
import SwiperPage from "@/components/shared/Swiper";

const Home = () => {
  return (
    <div>
      <SwiperPage />
      <MarqueePage />
      <Banner />
      <FeaturedBooks />
      <ExploreBooks />
    </div>
  );
};
export default Home;
