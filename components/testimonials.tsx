"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    company: "eBay",
    avatar: "/image6.png",
    quote:
      "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "Google",
    avatar: "/image6.png",
    quote:
      "The design process was seamless and the final result exceeded my expectations. Highly recommend their services.",
  },
  {
    id: 3,
    name: "John Doe",
    company: "Microsoft",
    avatar: "/image6.png",
    quote:
      "Professional, creative, and delivered exactly what we needed. The team's attention to detail is remarkable.",
  },
];

export default function TestimonialComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-[#010208] py-16 px-4 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <Star className="w-6 h-6 text-white fill-white" />
          <h2 className="text-white text-2xl md:text-3xl font-light">
            What they say
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Avatar and Info */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src={currentTestimonial.avatar || "/placeholder.svg"}
                alt={currentTestimonial.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white text-xl md:text-2xl font-medium">
                {currentTestimonial.name}
              </h3>
              <p className="text-gray-400 text-base md:text-lg">
                {currentTestimonial.company}
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="relative">
            <div className="text-6xl md:text-8xl text-gray-600 absolute -top-4 -left-2 md:-top-6 md:-left-4 leading-none">
              "
            </div>
            <p className="text-white text-lg md:text-xl leading-relaxed pl-8 md:pl-12">
              {currentTestimonial.quote}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mt-12 md:mt-16">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 md:w-14 md:h-14 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 md:w-14 md:h-14 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
