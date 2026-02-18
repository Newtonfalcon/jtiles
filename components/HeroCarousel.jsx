import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    title: "Welcome to Great JTiles & Interior Homes",
    subtitle: "Architectural Excellence Across Lagos",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    title: "Premium Residential Developments",
    subtitle: "Luxury Finishes • Modern Design • Structural Precision",
  },
  {
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1600&q=80",
    title: "Commercial & Interior Solutions",
    subtitle: "Tiles • Interior Architecture • Project Execution",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const duration = 7000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Ken Burns Background */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
                index === current ? "scale-110" : "scale-100"
              }`}
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-white">

              {/* Animated text reveal */}
              <p
                className={`text-sm tracking-[0.4em] text-blue-300 font-semibold transition-all duration-700 ${
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                LAGOS • NIGERIA
              </p>

              <h1
                className={`mt-6 text-4xl md:text-6xl font-bold leading-tight max-w-3xl transition-all duration-1000 delay-200 ${
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {slide.title}
              </h1>

              <p
                className={`mt-6 text-lg md:text-xl text-gray-200 max-w-2xl transition-all duration-1000 delay-500 ${
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {slide.subtitle}
              </p>

              {/* Blur Glass Buttons */}
              <div
                className={`mt-10 flex gap-6 flex-wrap transition-all duration-1000 delay-700 ${
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <button className="backdrop-blur-md bg-white/10 border border-white/30 px-8 py-4 font-semibold tracking-wide hover:bg-white hover:text-black transition">
                  Explore Projects
                </button>

                <button className="backdrop-blur-md bg-blue-900/70 border border-blue-400 px-8 py-4 font-semibold tracking-wide hover:bg-blue-800 transition">
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Progress Bar Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          key={current}
          className="h-full bg-blue-900 animate-progress"
          style={{
            animation: `progress ${duration}ms linear forwards`,
          }}
        ></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white opacity-80">
        <span className="text-xs tracking-widest mb-2">SCROLL</span>
        <div className="w-[1px] h-10 bg-white animate-pulse"></div>
      </div>

      {/* Custom animation */}
      <style>
        {`
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}
      </style>
    </section>
  );
}
