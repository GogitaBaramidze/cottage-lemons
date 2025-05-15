"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Waves } from "lucide-react";
import { useState } from "react";
import img from "@images/Lemons.jpg";
import img2 from "@images/nature/Gonio,_Batumi,_Georgia.jpg";
import img3 from "@images/GonioBeach2.jpg";

export default function NatureSection() {
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const images = [
    {
      img: img2,
      title: "Breathtaking Landscapes",
      desc: "Immerse yourself in the stunning natural beauty surrounding our cottage",
      isLarge: true,
    },
    {
      img: img,
      title: "Lemon Gardens",
      desc: "Our cottage is surrounded by beautiful lemon trees",
      isLarge: false,
    },
    {
      img: img3,
      title: "Pristine Beaches",
      desc: "Enjoy the crystal clear waters of Gonio Beach",
      isLarge: false,
    },
  ];

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 to-white"></div>
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-yellow-100/30 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-yellow-100/30 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-6 rounded-full bg-yellow-400"></div>
              <span className="text-yellow-600 font-medium flex items-center">
                <Leaf className="h-4 w-4 mr-1" /> Nature{" "}
                <Waves className="h-4 w-4 mx-1" /> Sea
              </span>
              <div className="h-1 w-6 rounded-full bg-yellow-400"></div>
            </div>
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Experience the Beauty of Nature and the Sea
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our cottage is surrounded by stunning natural landscapes and the
            serene sea, offering a perfect escape into nature's tranquility.
          </p>
        </div>

        {/* Image gallery with consistent sizes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-md transition-all duration-500 hover:shadow-xl ${
                image.isLarge
                  ? "md:col-span-12 lg:col-span-6"
                  : "md:col-span-6 lg:col-span-3"
              }`}
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
            >
              <div
                className={`relative ${
                  image.isLarge
                    ? "aspect-[16/9] md:aspect-[16/9]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={image.img || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  sizes={
                    image.isLarge
                      ? "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  }
                  className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                  placeholder="blur"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
                    isHovering === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300 ${
                    isHovering === index ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  <h3
                    className={`text-white font-medium ${image.isLarge ? "text-xl mb-2" : "text-lg mb-1"}`}
                  >
                    {image.title}
                  </h3>
                  <p className="text-white/90 text-sm">{image.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 px-8 py-3 font-medium text-black shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-yellow-200/50"
          >
            <span className="relative flex items-center">
              Explore Nature Gallery
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
