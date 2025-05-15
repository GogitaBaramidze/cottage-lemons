"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StarIcon, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    location: "United States",
    rating: 5,
    comment:
      "Absolutely stunning! The cottage exceeded all our expectations. Can't wait to come back!",
    avatar: "A",
  },
  {
    id: 2,
    name: "Bob Smith",
    location: "United Kingdom",
    rating: 4,
    comment:
      "Great location, very peaceful. The amenities were top-notch. Highly recommend for a weekend getaway.",
    avatar: "B",
  },
  {
    id: 3,
    name: "Carol Davis",
    location: "Canada",
    rating: 5,
    comment:
      "We had an amazing time. The cottage was spotless and the surroundings were breathtaking.",
    avatar: "C",
  },
  {
    id: 4,
    name: "David Brown",
    location: "Australia",
    rating: 5,
    comment:
      "Perfect place to unwind and reconnect with nature. The hosts were incredibly helpful and friendly.",
    avatar: "D",
  },
  {
    id: 5,
    name: "Eva Wilson",
    location: "Germany",
    rating: 4,
    comment:
      "Cozy, comfortable, and charming. We enjoyed every moment of our stay. Will definitely return!",
    avatar: "E",
  },
  {
    id: 6,
    name: "Frank Miller",
    location: "France",
    rating: 5,
    comment:
      "A hidden gem! The attention to detail in the cottage's decor and amenities was impressive.",
    avatar: "F",
  },
];

const ReviewsSection = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="relative py-20 overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 to-white"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-6 rounded-full bg-yellow-400"></div>
              <span className="text-yellow-600 font-medium">Testimonials</span>
              <div className="h-1 w-6 rounded-full bg-yellow-400"></div>
            </div>
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4">
            What Our Guests Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover why our guests love staying at Cottage Lemons and keep
            coming back
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full bg-white rounded-xl border border-yellow-100 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-yellow-100 hover:-translate-y-1">
                  {/* Quote icon */}
                  <div className="mb-4 flex justify-between items-start">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-yellow-200 rotate-180" />
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-700 italic leading-relaxed">
                      "{review.comment}"
                    </p>
                  </div>

                  <div className="flex items-center mt-auto">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 flex items-center justify-center text-black font-medium">
                      {review.avatar}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-800">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-center mt-8 gap-4">
            <CarouselPrevious className=" h-10 w-10 rounded-full border-2 border-yellow-400 bg-white text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700 static mx-0" />

            <div className="text-sm text-gray-500">
              {current} / {count}
            </div>

            <CarouselNext className=" h-10 w-10 rounded-full border-2 border-yellow-400 bg-white text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700 static mx-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ReviewsSection;
