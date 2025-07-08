'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const slides = [
  {
    id: 1,
    image: '/images/one.jpg',
    title: 'The Truth is The Everlasting',
    subtitle: 'The Moon Exports',
    description: 'Premium handicrafts manufacturer and exporter since 2015',
    cta: 'Enquiry',
    ctaLink: '/contact',
  },
  {
    id: 2,
    image: '/images/hero-slide-2.jpg',
    title: 'Handcrafted Excellence',
    subtitle: 'Buffalo Horn & Wooden Crafts',
    description: 'Authentic handicrafts from Sambhal, Moradabad, India',
    cta: 'View Products',
    ctaLink: '/products',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-96 lg:h-[500px] overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-3 text-shadow-lg">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-2xl mb-4 text-shadow-md">
                  {slide.subtitle}
                </h2>
                <p className="text-base md:text-lg mb-6 text-shadow-sm">
                  {slide.description}
                </p>
                <Link
                  href={slide.ctaLink}
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
