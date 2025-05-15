import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import img from "@images/cottage/Cottage1.jpg";

export default function CoverSection() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 h-[110%] w-full transform transition-transform duration-10000 ease-in-out hover:scale-105">
        <Image
          src={img || "/placeholder.svg"}
          alt="Beautiful nature surrounding our cottage"
          fill
          sizes="100vw"
          priority
          quality={90}
          placeholder="blur"
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl animate-fade-in text-center">
          {/* Decorative Element */}
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-yellow-400" />

          {/* Main Heading with Animation */}
          <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl">
            <span
              className="block animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Welcome to
            </span>
            <span
              className="mt-2 block h-20 animate-fade-in-up bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent"
              style={{ animationDelay: "0.6s" }}
            >
              Cottage Lemons
            </span>
          </h1>

          {/* Subtitle with Animation */}
          <p
            className="mx-auto mb-10 max-w-2xl animate-fade-in-up text-lg text-gray-100 drop-shadow-md sm:text-xl md:text-2xl"
            style={{ animationDelay: "0.9s" }}
          >
            Experience nature's beauty in comfort and tranquility, surrounded by
            breathtaking landscapes
          </p>

          {/* CTA Button with Animation */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            <Link
              href="https://www.booking.com/hotel/ge/cottage-lemons-in-gonio.en-gb.html?aid=356980&label=gog235jc-1DCAsoUkIXY290dGFnZS1sZW1vbnMtaW4tZ29uaW9IM1gDaFKIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4Ap2mubgGwAIB0gIkOTU2MTM4ZmEtZDU0OS00ZGM1LWI3ODItOTVlYTIyYmM4NjU12AIE4AIB&sid=80e9e0746b7f1777949c6b261116c670&dist=0&keep_landing=1&sb_price_type=total&type=total&"
              target="_blank"
              className="group inline-flex items-center justify-center rounded-full bg-yellow-400 px-10 py-4 text-base font-medium text-black transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/30 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 sm:text-lg"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
