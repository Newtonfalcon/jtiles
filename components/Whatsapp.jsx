import { useState } from "react";

const FloatingWhatsApp = () => {
  const [hovered, setHovered] = useState(false);

  const phoneNumber = "2347060539767";
  const message =
    "Hello GreatJ Tiles, I would like to make an inquiry about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center">
      
      {/* Tooltip */}
      <div
        className={`mr-4 px-4 py-2 rounded-full bg-navy-900 text-white text-sm shadow-lg transition-all duration-300 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
        style={{ backgroundColor: "#0B1C3F" }}
      >
        Chat With Us
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-2xl transition-transform duration-300 hover:scale-110"
      >
        {/* Pulse Glow */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-white relative"
        >
          <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.6 2.1 8.1L.1 31.9l8-2.3c2.4 1.3 5.1 2 7.9 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.5c-2.4 0-4.8-.6-6.9-1.8l-.5-.3-4.7 1.4 1.4-4.6-.3-.5c-1.3-2.1-2-4.5-2-7 0-7.1 5.8-12.9 12.9-12.9S28.9 8.9 28.9 16 23.1 28.9 16 28.9zm7.4-9.7c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.4 1.6-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.5-2.2-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.2 0-.5 0-.7 0-.2-1-2.5-1.4-3.4-.3-.8-.6-.7-1-.7h-.9c-.3 0-.7.1-1 .5-.3.4-1.4 1.3-1.4 3.1s1.4 3.5 1.6 3.7c.2.2 2.8 4.3 6.8 6 1 .4 1.7.6 2.3.8 1 .3 1.9.3 2.6.2.8-.1 2.4-1 2.8-2 .3-1 .3-1.8.2-2-.1-.2-.4-.3-.8-.5z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
