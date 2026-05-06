import Banner from "@/components/homepage/Banner";
import MarqueePage from "@/components/homepage/Marquee";
import SwiperPage from "@/components/shared/Swiper";

const Home = () => {
  return (
    <div>
      <SwiperPage />
      <MarqueePage />
      <Banner />
    </div>
  );
};
export default Home;
