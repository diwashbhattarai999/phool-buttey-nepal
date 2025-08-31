"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { integralCF, satoshi } from "@/app/ui/fonts";

const testimonials = [
  {
    id: 1,
    name: "Aarati S.",
    rating: 5,
    verified: true,
    text: '"The Dhaka scarf I ordered is absolutely beautiful! The fabric feels premium, and the colors are vibrant. It’s my new go-to accessory."',
  },
  {
    id: 2,
    name: "Ramesh P.",
    rating: 5,
    verified: true,
    text: '"I gifted a cotton shawl to my mother, and she loved it. The craftsmanship and comfort are unmatched. Thank you for keeping Nepali tradition alive!"',
  },
  {
    id: 3,
    name: "Elena G.",
    rating: 5,
    verified: true,
    text: '"I’m from Spain and ordered a handmade Dhaka bag. It arrived quickly and the quality exceeded my expectations. A perfect blend of culture and style."',
  },
  {
    id: 4,
    name: "Bikash K.",
    rating: 5,
    verified: true,
    text: '"The cotton malmal kurta I bought feels super soft and comfortable. I really appreciate the authenticity and the eco-friendly packaging too."',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesPerView >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, testimonials.length - slidesPerView) : prevIndex - 1
    );
  };

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-12 md:py-16">
      <div className="flex items-center justify-between mb-8 md:mb-12">
        <h2 className={`${integralCF.className} text-2xl md:text-[32px] font-bold`}>
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`w-full flex-shrink-0 px-2 md:w-1/2 lg:w-1/3`}>
              <div className="h-full rounded-xl border border-gray-200 bg-white p-6">
                <StarRating rating={testimonial.rating} />
                <div className="mt-4 flex items-center gap-2">
                  <span className={`${satoshi.className} font-medium`}>{testimonial.name}</span>
                  {testimonial.verified && <span className="h-2 w-2 rounded-full bg-green-500" />}
                </div>
                <p className={`${satoshi.className} mt-4 text-gray-600 leading-relaxed`}>
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2 md:hidden">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
