import heroImage1 from "../assets/hero/hero-img-1.jpg";
import heroImage2 from "../assets/hero/hero-img-2.jpg";
import heroImage3 from "../assets/hero/hero-img-3.jpg";
import heroImage4 from "../assets/hero/hero-img-4.jpg";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
const HeroSection = () => {
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            loop: true,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <img src={heroImage1} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={heroImage2} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={heroImage3} alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src={heroImage4} alt="" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroSection;
