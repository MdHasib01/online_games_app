import React from "react";
import heroImage1 from "../assets/hero/hero-img-1.jpg";
import heroImage2 from "../assets/hero/hero-img-2.jpg";
import heroImage3 from "../assets/hero/hero-img-3.jpg";
import heroImage4 from "../assets/hero/hero-img-4.jpg";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
const HeroSection = () => {
  return (
    <div>
      <img src={heroImage1} alt="" />
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroSection;
