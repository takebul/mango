import Banner from "@/components/homepage/Banner";
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
    </div>
  );
};
export default Home;
