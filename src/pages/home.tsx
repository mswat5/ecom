import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import banner5 from "../assets/banner5.png";
import banner6 from "../assets/banner6.png";
import banner7 from "../assets/banner7.png";
import diwalipic from "../assets/diwalipic.png";
import { useEffect, useState } from "react";
import ContactPage from "@/components/contact-us";
import FeaturedProducts from "@/components/FeaturedProducts";

const featureImageList = [
  { id: 1, image: banner1 },
  { id: 2, image: banner2 },
  { id: 3, image: banner3 },
  { id: 4, image: banner4 },
  { id: 5, image: banner5 },
  { id: 6, image: banner6 },
  { id: 7, image: banner7 },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bannerHeight, setBannerHeight] = useState("400px");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 5000);

    const handleResize = () => {
      setBannerHeight(window.innerWidth > 768 ? "400px" : "200px");
    };

    // Initial setup
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen mt-6">
      <div
        className="relative w-full mx-auto overflow-hidden"
        style={{ height: bannerHeight }}
      >
        {featureImageList.map((slide, index) => (
          <img
            src={slide.image}
            key={slide.id}
            alt={`Banner ${slide.id}`}
            className={`${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000`}
          />
        ))}
      </div>

      <section className="m-4 md:m-8">
        <FeaturedProducts />
      </section>

      <div className="bg-black text-white py-8 md:py-16 text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-4 md:space-y-8">
          <h1 className="text-4xl md:text-6xl font-light mb-4 md:mb-8">
            Welcome to our site
          </h1>
          <div className="space-y-2 mb-4 md:mb-8">
            <h2 className="text-xl md:text-2xl">
              Where Style Meets Innovation
            </h2>
            <h3 className="text-lg md:text-xl">Elevate Your Tech Lifestyle</h3>
          </div>
          <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-8 px-4">
            Indulge in cutting-edge accessories designed to redefine how you
            experience your devices. At JNP, we blend fashion and function to
            bring you stylish phone covers, watches, headphones, and more.
          </p>
          <span className="text-base md:text-lg">Explore Now</span>
        </div>
      </div>

      <div className="mx-auto h-[300px] md:h-[500px] my-6 md:my-12 px-4">
        <img
          src={diwalipic}
          alt="happy diwali"
          className="w-full h-full object-contain"
        />
      </div>
      <ContactPage />
    </div>
  );
}
