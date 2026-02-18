

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


/* ================= DATA ================= */

const services = [
  {
    title: "Premium Tile Collection",
    description:
      "Imported porcelain, marble, ceramic, granite and large-format slabs curated for luxury residential and commercial spaces.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Luxury Interior Design",
    description:
      "Complete spatial transformation with refined material selection, lighting balance and modern Lagos elegance.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80",
  },
  
  {
    title: "Kitchen & Bathroom Remodeling",
    description:
      "Full structural and aesthetic renovation transforming everyday spaces into luxury experiences.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
 
  {
    title: "Design Consultation",
    description:
      "Private consultation sessions guiding material selection, layout decisions and finishing combinations.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
  },
];

const stats = [
  { number: "500+", label: "Completed Projects" },
  { number: "12+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "100%", label: "Premium Materials" },
];

/* ================= COMPONENT ================= */

export default function ServicesPage() {
  return (
    <>
    <Navbar />
    <div className="bg-white text-[#0B1C3F]">

      {/* ================= HERO ================= */}
      <section className="bg-[#0B1C3F] text-white py-40 px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl font-light leading-tight mb-8">
            Ultra-Premium Services
          </h1>

          <div className="w-28 h-[2px] bg-[#C6A75E] mx-auto mb-10" />

          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Delivering world-class tile supply, interior finishing and luxury
            project execution for elite residential and commercial clients.
          </p>
        </motion.div>
      </section>

      {/* ================= BRAND INTRO ================= */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-8">
          Excellence Without Compromise
        </h2>
        <div className="w-24 h-[2px] bg-[#C6A75E] mx-auto mb-10" />
        <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
          We combine global material sourcing, refined craftsmanship and
          disciplined project management to deliver spaces that reflect
          prestige, elegance and structural integrity.
        </p>
      </section>

      {/* ================= SERVICES (ALTERNATING LAYOUT) ================= */}
      <section className="space-y-40 pb-40">

        {services.map((service, index) => (
          <div
            key={index}
            className={`max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-semibold mb-6">
                {service.title}
              </h3>

              <div className="w-16 h-[2px] bg-[#C6A75E] mb-6" />

              <p className="text-gray-600 text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </div>
        ))}

      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="bg-[#0B1C3F] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-4xl font-semibold text-[#C6A75E] mb-2">
                {item.number}
              </h3>
              <p className="text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-40 px-6 md:px-12 text-center">
        <h2 className="text-5xl font-light mb-8">
          Ready To Elevate Your Space?
        </h2>

        <div className="w-24 h-[2px] bg-[#C6A75E] mx-auto mb-10" />

        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Partner with a team that understands luxury, precision and long-term
          value.
        </p>

        <a
          href="/contact"
          className="px-12 py-5 bg-[#0B1C3F] text-white rounded-full text-lg hover:bg-[#C6A75E] hover:text-[#0B1C3F] transition duration-500"
        >
          Schedule Consultation
        </a>
      </section>

    </div>
    <Footer />
    </>
  );
}
