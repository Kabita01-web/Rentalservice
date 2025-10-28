import { Home, Menu, X, ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinkClass = (base = "") =>
    `${base} flex items-center gap-2 hover:opacity-80 transition-all duration-300 text-base xl:text-lg font-medium ${
      isScrolled ? "text-gray-900" : "text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Navbar container */}
      <div
        className={`flex items-center justify-between backdrop-blur-md border px-4 sm:px-6 lg:px-8 py-3 sm:py-4 shadow-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-white border-gray-200"
            : "bg-white/10 border-white/20"
        }`}
      >
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <Home
            className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-colors duration-300 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          />
          <span
            className={`text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            GharBhada
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <a href="/" className={navLinkClass()}>
            Home
          </a>
          <a href="/" className={navLinkClass()}>
            Listing <ChevronDown className="w-5 h-5" />
          </a>
          <a href="/contact" className={navLinkClass()}>
            Contact
          </a>
          <a href="/about" className={navLinkClass()}>
            About
          </a>
          <a href="/requirement" className={navLinkClass()}>
            Requirements
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <button
            className={`px-4 lg:px-6 py-2 hover:opacity-80 transition-all duration-300 text-base lg:text-lg font-medium ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Login
          </button>
          <button
            className={`px-4 lg:px-6 py-2 rounded-lg hover:opacity-90 transition-all duration-300 text-base lg:text-lg font-medium shadow-lg ${
              isScrolled ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={`md:hidden p-2 transition-colors duration-300 ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden backdrop-blur-md border-x border-b transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } ${
          isScrolled
            ? "bg-white border-gray-200"
            : "bg-white/10 border-white/20"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-4">
          {["Home"].map((item) => (
            <a
              key={item}
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-2 hover:opacity-80 transition-all duration-300 text-base font-medium ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}

          {["Listing"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-2 hover:opacity-80 transition-all duration-300 text-base font-medium ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}

          {["Contact"].map((item) => (
            <a
              key={item}
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-2 hover:opacity-80 transition-all duration-300 text-base font-medium ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}

          {["About"].map((item) => (
            <a
              key={item}
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-2 hover:opacity-80 transition-all duration-300 text-base font-medium ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}

          {["Requirement"].map((item) => (
            <a
              key={item}
              href="/requirement"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-2 hover:opacity-80 transition-all duration-300 text-base font-medium ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-300/20">
            <button
              className={`w-full px-4 py-2 hover:opacity-80 transition-all duration-300 text-base font-medium text-left ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Login
            </button>
            <button
              className={`w-full px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-300 text-base font-medium shadow-lg ${
                isScrolled ? "bg-gray-900 text-white" : "bg-white text-gray-900"
              }`}
            >
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
