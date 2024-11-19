"use client";
import { useState, useEffect } from "react";
import { featuredProducts } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Create a duplicated array for smooth infinite loop
  const displayProducts = [
    ...featuredProducts.slice(0, isMobile ? 3 : 6),
    ...featuredProducts.slice(0, isMobile ? 3 : 6),
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (isMobile ? 6 : 6));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (isMobile ? 5 : 5) : prevIndex - 1
    );
  };

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <div className="overflow-hidden mx-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (isMobile ? 33.33 : 25)
                }%)`,
              }}
            >
              {displayProducts.map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className={`w-${isMobile ? "1/3" : "1/4"} flex-shrink-0 px-2`}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Simple dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: isMobile ? 6 : 6 }, (_, i) => i).map(
              (index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    currentIndex === index ? "bg-black" : "bg-gray-300"
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
