"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/* ================= DATA ================= */

const categories = ["All", "Residential", "Commercial"];

const projects = [
  {
    title: "Lekki Marble Residence",
    category: "Residential",
    location: "Lekki, Lagos",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Victoria Island Office",
    category: "Commercial",
    location: "Victoria Island, Lagos",
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Ikeja Modern Kitchen",
    category: "Residential",
    location: "Ikeja, Lagos",
    image:
      "https://images.unsplash.com/photo-1600566752227-8f3a8c62e5b7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Ikoyi Luxury Apartment",
    category: "Residential",
    location: "Ikoyi, Lagos",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Corporate Lobby Finish",
    category: "Commercial",
    location: "Lagos Island",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Contemporary Bathroom",
    category: "Residential",
    location: "Surulere, Lagos",
    image:
      "https://images.unsplash.com/photo-1582582494700-99f6c6e58e7b?auto=format&fit=crop&w=900&q=80",
  },
];


/* ================= COMPONENT ================= */

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
    <Navbar/>
    <div className="bg-white text-[#1A1A1A]">

      {/* ================= HERO ================= */}
      <section className="py-28 px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-6">
            Our Projects
          </h1>

          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mb-8" />

          <p className="text-gray-600 text-lg leading-relaxed">
            A curated collection of refined interiors delivered across Lagos.
          </p>
        </motion.div>
      </section>

      {/* ================= FILTER ================= */}
      <section className="flex justify-center gap-6 mb-16 px-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border transition duration-300 ${
              activeCategory === cat
                ? "bg-[#C6A75E] text-white border-[#C6A75E]"
                : "border-gray-300 text-gray-600 hover:border-[#C6A75E] hover:text-[#C6A75E]"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* ================= PROJECT GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-32">

        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl group break-inside-avoid"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover rounded-3xl transform group-hover:scale-105 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl flex flex-col justify-end p-8">

                  <div className="translate-y-6 group-hover:translate-y-0 transition duration-500">
                    <h3 className="text-white text-xl font-medium">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-2">
                      {project.location}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </section>

      {/* ================= GOLD DIVIDER ================= */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mb-24" />

      {/* ================= CTA ================= */}
      <section className="pb-32 px-6 md:px-12 text-center">

        <motion.div
          className="max-w-4xl mx-auto border border-[#C6A75E]/30 rounded-3xl p-14 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Let’s Create Something Exceptional
          </h2>

          <p className="text-gray-600 mb-10 text-lg">
            Partner with us to transform your space into a refined architectural statement.
          </p>

          <button className="px-10 py-4 rounded-full bg-[#C6A75E] text-white font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-[#C6A75E]/20">
            Start Your Project
          </button>

        </motion.div>

      </section>

    </div>
    <Footer/>
    </>
  );
}
