import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
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
  const featuredProducts = products.slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col min-h-screen mt-6">
      <div className="relative w-[800px] h-[400px] mx-auto overflow-hidden">
        {featureImageList.map((slide, index) => (
          <img
            src={slide.image}
            key={slide.id}
            className={`${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
          />
        ))}
      </div>

      <section className="m-16">
        {/* <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}
        <FeaturedProducts />
      </section>
      <div className="bg-black text-white py-16 text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h1 className="text-6xl font-light mb-8">Welcome to our site</h1>
          <div className="space-y-2 mb-8">
            <h2 className="text-2xl">Where Style Meets Innovation</h2>
            <h3 className="text-xl">Elevate Your Tech Lifestyle</h3>
          </div>
          <p className="text-lg leading-relaxed mb-8">
            Indulge in cutting-edge accessories designed to redefine how you
            experience your devices. At JNP, we blend fashion and function to
            bring you stylish phone covers, watches, headphones, and more.
          </p>
          <span className="text-lg">Explore Now</span>
        </div>
      </div>

      <div className="mx-auto h-[500px] my-12">
        <img src={diwalipic} alt="happy diwali" className="w-full h-full" />
      </div>
      <ContactPage />
    </div>
  );
}
