"use client";
import HotelRoom1 from "@images/cottage/Cottage1.jpg";
import HotelRoom3 from "@images/cottage/Cottage2.jpg";
import HotelRoom4 from "@images/cottage/Cottage3.jpg";
import HotelRoom5 from "@images/cottage/Cottage5.jpg";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function CottageImages() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params.locale;
  const data = [
    {
      img: HotelRoom3,
      alt: t("hotelImg"),
    },
    {
      img: HotelRoom1,
      alt: t("hotelImg"),
    },
    {
      img: HotelRoom4,
      alt: t("hotelImg"),
    },
    {
      img: HotelRoom5,
      alt: t("hotelImg"),
    },
  ];

  return (
    <section className="h-auto w-full bg-yellow-50 py-16">
      <div className="text-center">
        <h1 className="pb-6 text-5xl font-bold text-yellow-600 md:text-6xl">
          Exclusive Accommodations
        </h1>
        <p className="mb-10 text-lg text-gray-600">
          Experience the best stay at our cottages
        </p>
      </div>
      <PhotoProvider>
        <Carousel opts={{ loop: true }}>
          <CarouselContent className="pr-4 md:pr-10 xl:pr-32">
            {data.map((item, index) => (
              <CarouselItem key={index} className="md:basis-2/3">
                <CardContent className="flex items-center justify-center p-0">
                  <PhotoView src={item.img.src}>
                    <Image
                      src={item.img || "/placeholder.svg"}
                      alt={item.alt}
                      className="h-[300px] w-full cursor-pointer rounded-md object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-105 md:h-[440px] md:w-[800px]"
                    />
                  </PhotoView>
                </CardContent>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-4 hidden justify-center md:flex">
            <CarouselPrevious className="mr-4 text-yellow-600 border-yellow-400" />
            <CarouselNext className="text-yellow-600 border-yellow-400" />
          </div>
        </Carousel>
      </PhotoProvider>
      <div className="mt-12 text-center">
        <a className="inline-block rounded-xl cursor-pointer bg-yellow-400 px-6 py-3 text-lg font-semibold text-black shadow-md transition-colors duration-300 ease-in-out hover:bg-yellow-300">
          View More
        </a>
      </div>
    </section>
  );
}
