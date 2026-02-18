"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/* ================= DATA ================= */

const companyData = {
  name: "Great JTiles & Interior Homes",
  founded: 2018,
  address: "No 5, Fafolu street, Olorunsogo Bus Stop, Mushin, Lagos",
};

const highlights = [
  {
    title: "Premium Tile Installations",
    description:
      "Luxury marble, porcelain, ceramic and bespoke tile finishing tailored for modern Lagos homes.",
  },
  {
    title: "Interior Finishing Expertise",
    description:
      "Refined detailing, seamless execution and world-class finishing standards.",
  },
  {
    title: "Trusted Across Lagos",
    description:
      "Serving homeowners, developers and businesses across Victoria Island, Lekki, Ikeja and beyond.",
  },
];

const testimonials = [
  {
    name: "Mr. Adewale Johnson",
    text: "Their marble finishing completely transformed my Lekki home. Exceptional craftsmanship and professionalism.",
  },
  {
    name: "Mrs. Kemi Balogun",
    text: "Attention to detail is unmatched. Lagos truly needs more firms operating at this level.",
  },
];

/* ================= COMPONENT ================= */

export default function AboutPage() {
  const [zoom, setZoom] = useState(1);

  // Slow zoom (Ken Burns effect)
  useEffect(() => {
    const interval = setInterval(() => {
      setZoom((prev) => (prev >= 1.1 ? 1 : prev + 0.002));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Navbar/>
    <div className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative h-[550px] md:h-[650px] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80')",
            scale: zoom,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Redefining Interior Excellence in Lagos
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90">
            Crafting timeless tile and interior finishes since {companyData.founded}
          </p>
        </motion.div>
      </section>

      {/* Subtle Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-20" />

      {/* ================= COMPANY STORY ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Our Story
          </h2>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Founded in {companyData.founded}, {companyData.name} was built with
              a singular vision — to elevate interior finishing standards across Lagos.
              From residential homes in Lekki to premium apartments in Victoria Island,
              our commitment has always been excellence without compromise.
            </p>

            <p>
              Over the years, we have served Lagosians with precision craftsmanship,
              innovative tile solutions and refined detailing that transforms spaces
              into elegant environments. We believe interiors should feel luxurious,
              durable and timeless.
            </p>

            <p>
              Located at {companyData.address}, we continue to deliver
              premium interior finishing solutions tailored to the evolving
              architectural landscape of Lagos.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-20" />

      {/* ================= HIGHLIGHTS ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Lagos Trusts Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-500 bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-20" />

      {/* ================= TESTIMONIAL PREVIEW ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 italic leading-relaxed mb-6">
                “{item.text}”
              </p>
              <p className="font-semibold text-gray-900">
                — {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-20" />

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden">

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700" />

        <div className="relative max-w-4xl mx-auto text-center">

          <motion.div
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Ready to Transform Your Space?
            </h2>

            <p className="text-white/80 mb-8 text-lg">
              Let’s bring elegance and precision to your next interior project.
            </p>

            <button className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:scale-105 transition duration-300">
              Start Your Project
            </button>
          </motion.div>

        </div>
      </section>

    </div>
    <Footer/>
    </>
  );
}
