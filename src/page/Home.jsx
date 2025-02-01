import bgImage from "../assets/bg.jpg";
import Headline from "../components/Headline";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className="min-h-[100vh] bg-no-repeat bg-cover flex justify-center items-center"
    >
      <div className="bg-yellow-100 w-full max-w-[500px] min-h-[100vh] relative overflow-x-hidden">
        <NavBar />
        <HeroSection />

        <Headline />
      </div>
    </div>
  );
};

export default Home;
