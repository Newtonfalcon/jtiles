import { useState, useEffect, useRef } from "react";
import p774909 from "../src/assets/images/pexels-774909.jpg";
import p2379004 from "../src/assets/images/pexels-2379004.jpg";
import p733872 from "../src/assets/images/pexels-733872.jpg";
import p2379005 from "../src/assets/images/pexels-2379005.jpg";
import p1181686 from "../src/assets/images/pexels-1181686.jpg";

const testimonials = [
  {
    name: "Aisha Johnson",
    location: "Victoria Island, Lagos",
    role: "Homeowner",
    quote:
      "The attention to detail and quality of work exceeded our expectations. Our home has been transformed into a beautiful space we love.",
    image: p774909,
  },
  {
    name: "David Adeyemi",
    location: "Lekki, Lagos",
    role: "Interior Designer",
    quote:
      "Exceptional service from start to finish. The team was professional, and the results were simply stunning.",
    image: p2379004,
  },
  {
    name: "Sandra Okafor",
    location: "Ikoyi, Lagos",
    role: "Project Manager",
    quote:
      "I was impressed with the creativity and precision. Our office now feels modern and welcoming.",
    image: p733872,
  },
  {
    name: "Chukwuemeka Nnaji",
    location: "Surulere, Lagos",
    role: "Homeowner",
    quote:
      "Professional, reliable, and the end result was beyond what we imagined. Highly recommend!",
    image: p2379005,
  },
  {
    name: "Grace Adebayo",
    location: "Banana Island, Lagos",
    role: "Interior Architect",
    quote:
      "The designs brought our vision to life. Excellent craftsmanship and attention to detail.",
    image: p1181686,
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const duration = 6000;

  // Auto-loop carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, duration);
    return () => clearInterval(interval);
  }, []);

  // Scroll fade-in animation
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative bg-grey-50 h-160 py-8 transition-all duration-1000  ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-sm tracking-widest text-blue-900 font-semibold">
          TESTIMONIALS
        </p>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
          What Our Clients Say
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative mt-16 max-w-4xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current
                ? "opacity-100 z-10 scale-100 translate-y-0"
                : "opacity-0 z-0 scale-95 translate-y-4"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center space-y-6">
              <p className="text-gray-700 italic text-lg">&quot;{t.quote}&quot;</p>
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">
                  {t.role}, {t.location}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300 mt-4 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-900"
            style={{
              animation: `progress ${duration}ms linear infinite`,
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 opacity-80">
        <span className="text-xs tracking-widest mb-2">SCROLL</span>
        <div className="w-[1px] h-10 bg-gray-400 animate-pulse"></div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}
      </style>
    </section>
  );
}
