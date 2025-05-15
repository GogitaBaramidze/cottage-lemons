"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/50 backdrop-blur-lg shadow-sm py-3"
          : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link
          href="/"
          className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-2xl font-bold text-transparent transition-transform hover:scale-105"
        >
          Cottage Lemons
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>
            Contact
          </NavLink>
          <Link
            href="https://www.booking.com/hotel/ge/cottage-lemons-in-gonio.en-gb.html?aid=356980&label=gog235jc-1DCAsoUkIXY290dGFnZS1sZW1vbnMtaW4tZ29uaW9IM1gDaFKIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4Ap2mubgGwAIB0gIkOTU2MTM4ZmEtZDU0OS00ZGM1LWI3ODItOTVlYTIyYmM4NjU12AIE4AIB&sid=80e9e0746b7f1777949c6b261116c670&dist=0&keep_landing=1&sb_price_type=total&type=total&"
            target="_blank"
            className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 px-5 py-2 font-medium text-black transition-all hover:shadow-md hover:shadow-yellow-200 active:scale-95"
          >
            Book Now
          </Link>
        </nav>

        <button
          className="md:hidden relative z-20 p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute block h-0.5 bg-gray-800 transform transition-all duration-300 ease-in-out rounded-full ${
                isMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
              }`}
              style={{ top: "8px" }}
            />
            <span
              className={`absolute w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ease-in-out rounded-full ${
                isMenuOpen ? "rotate-45" : "rotate-0"
              }`}
              style={{ top: "12px" }}
            />
            <span
              className={`absolute w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ease-in-out rounded-full ${
                isMenuOpen ? "-rotate-45" : "rotate-0"
              }`}
              style={{ top: "12px" }}
            />
            <span
              className={`absolute block h-0.5 bg-gray-800 transform transition-all duration-300 ease-in-out rounded-full ${
                isMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
              }`}
              style={{ top: "16px" }}
            />
          </div>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-white z-10 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden pt-20`}
      >
        <nav className="flex flex-col items-center space-y-6 p-8">
          <MobileNavLink href="/" active={pathname === "/"}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/contact" active={pathname === "/contact"}>
            Contact
          </MobileNavLink>
          <Link
            href="https://www.booking.com/hotel/ge/cottage-lemons-in-gonio.en-gb.html?aid=356980&label=gog235jc-1DCAsoUkIXY290dGFnZS1sZW1vbnMtaW4tZ29uaW9IM1gDaFKIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4Ap2mubgGwAIB0gIkOTU2MTM4ZmEtZDU0OS00ZGM1LWI3ODItOTVlYTIyYmM4NjU12AIE4AIB&sid=80e9e0746b7f1777949c6b261116c670&dist=0&keep_landing=1&sb_price_type=total&type=total&"
            target="_blank"
            className="mt-4 w-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 px-5 py-3 font-medium text-black transition-all hover:shadow-md hover:shadow-yellow-200 active:scale-95"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ href, active, children }: any) => (
  <Link
    href={href}
    className={`relative font-medium transition-colors ${
      active ? "text-yellow-600" : "text-gray-600 hover:text-yellow-500"
    }`}
  >
    {children}
    <span
      className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left transform bg-yellow-400 transition-transform duration-300 ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
    />
  </Link>
);

const MobileNavLink = ({ href, active, children }: any) => (
  <Link
    href={href}
    className={`w-full rounded-lg px-4 py-3 text-center text-xl transition-colors ${
      active
        ? "bg-yellow-50 font-medium text-yellow-600"
        : "text-gray-700 hover:bg-gray-50"
    }`}
  >
    {children}
  </Link>
);

export default Header;
