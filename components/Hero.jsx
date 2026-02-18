import { useEffect, useRef, useState } from "react";

const sections = [
  {
    eyebrow: "LAGOS • NIGERIA",
    title: "Architectural Excellence. Designed for Distinction.",
    description:
      "We design and deliver premium residential and commercial spaces across Lagos — combining architectural precision, material excellence, and timeless interior craftsmanship.",
    primary: "Explore Projects",
    secondary: "Schedule Consultation",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    eyebrow: "OUR APPROACH",
    title: "Modern Architecture with Enduring Value",
    description:
      "From luxury residences in Lekki to high-end commercial developments, we transform ideas into structurally sound, aesthetically refined environments built for longevity.",
    primary: "View Portfolio",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function Hero() {
  const [visible, setVisible] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">

      {/* Subtle architectural pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(90deg,_#1e3a8a_1px,_transparent_1px),linear-gradient(#1e3a8a_1px,_transparent_1px)] [background-size:60px_60px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 space-y-40">

        {sections.map((section, index) => {
          const isVisible = visible.includes(index.toString());
          const reverse = index % 2 !== 0;

          return (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              data-index={index}
              className={`grid md:grid-cols-2 gap-20 items-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* TEXT */}
              <div className={`${reverse ? "md:order-2" : ""}`}>
                
                <p className="text-sm tracking-[0.3em] text-blue-900 font-semibold">
                  {section.eyebrow}
                </p>

                <h1 className="mt-6 text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                  {section.title}
                </h1>

                <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
                  {section.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-6">
                  <button className="bg-blue-900 text-white px-8 py-4 font-semibold tracking-wide hover:bg-blue-800 transition shadow-lg">
                    {section.primary}
                  </button>

                  {section.secondary && (
                    <button className="border border-blue-900 text-blue-900 px-8 py-4 font-semibold tracking-wide hover:bg-blue-50 transition">
                      {section.secondary}
                    </button>
                  )}
                </div>
              </div>

              {/* IMAGE */}
              <div className={`${reverse ? "md:order-1" : ""}`}>
                <div className="relative">
                  
                  {/* Soft gradient backing */}
                  <div className="absolute -inset-6 bg-gradient-to-tr from-blue-50 via-white to-white rounded-2xl"></div>

                  <img
                    src={section.image}
                    alt={section.title}
                    className="relative rounded-2xl shadow-2xl object-cover w-full h-[520px]"
                  />
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
