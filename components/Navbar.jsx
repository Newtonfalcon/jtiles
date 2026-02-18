import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];


  return (
    <>
      {/* ================= TOP INFO BAR ================= */}
      <div className="w-full bg-blue-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex justify-between items-center">
          <span className="font-medium tracking-wide">
            Great JTiles & Interior Homes
          </span>

          <div className="hidden md:flex items-center space-x-8 opacity-90">
            <span>Call Us: 07060539767</span>
            <span>Email: info@greatjtiles.com</span>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav
        className={`w-full bg-white transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 shadow-xl z-50 py-2"
            : "relative py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-2xl font-bold tracking-widest text-gray-900">
            <img src="/logo.png" alt="GreatJ Tiles Logo" className="h-10 w-auto" />
            
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-12 text-sm font-medium tracking-wide">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="relative text-gray-800 hover:text-blue-900 transition duration-300 group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="bg-blue-900 text-white px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-blue-800 transition duration-300 shadow-md hover:shadow-lg">
              Request Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X size={24} className="text-gray-800" />
              ) : (
                <Menu size={24} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${
            menuOpen
              ? "max-h-[600px] py-6 border-t border-gray-200"
              : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-6 px-6 text-sm font-medium">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="border-b border-gray-100 pb-3 text-gray-800 hover:text-blue-900 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <button className="mt-4 bg-blue-900 text-white py-3 font-semibold tracking-wide hover:bg-blue-800 transition">
              Request Quote
            </button>

            <div className="pt-6 text-xs text-gray-600 space-y-1">
              <p>07060539767</p>
              <p>info@greatjtiles.com</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
