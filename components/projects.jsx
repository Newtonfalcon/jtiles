import { useState, useEffect, useRef } from "react";
import p32696572 from "../src/assets/images/pexels-32696572.jpg";
import p34446591 from "../src/assets/images/pexels-34446591.jpg";
import p30705307 from "../src/assets/images/pexels-30705307.jpg";

const allProjects = [
  {
    id: 1,
    title: "Modern Bathroom Tile",
    category: "Bathrooms",
    description:
      "Stylish modern bathroom interior with premium tile finishes.",
    image: p32696572,
  },
  {
    id: 2,
    title: "Kitchen Tile Design",
    category: "Kitchens",
    description:
      "Contemporary kitchen with beautifully patterned floor tiles.",
    image: p34446591,
  },
  {
    id: 3,
    title: "Interior Tile & Decor",
    category: "Interiors",
    description:
      "Open interior space showcasing modern tile flooring and décor.",
    image: p34446591,
  },
  {
    id: 4,
    title: "Bathroom Tile Detail",
    category: "Bathrooms",
    description:
      "Elegant bathroom detail with textured tile accents.",
    image: p30705307,
  },
  {
    id: 5,
    title: "Spacious Tiled Flooring",
    category: "Tiles",
    description:
      "Bright space with large format tiles blending into contemporary design.",
    image: p34446591,
  },
];


const categories = ["All", "Tiles", "Bathrooms", "Kitchens", "Interiors"];

export default function LuxuryProjects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [modalProject, setModalProject] = useState(null);

  // Filter projects
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter((p) => p.category === activeCategory)
      );
    }
  }, [activeCategory]);

  // Smooth fade-in scroll animation
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-gray-50 py-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-blue-900 font-semibold">
            FEATURED PROJECTS
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Our Tiles & Interior Work
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition ${
                activeCategory === cat
                  ? "bg-blue-900 text-white"
                  : "bg-white text-gray-800 border border-gray-300 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden shadow-lg"
              onClick={() => setModalProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4 rounded-xl">
                <div>
                  <h3 className="text-white font-semibold">{project.title}</h3>
                  <p className="text-gray-200 text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative max-w-3xl w-full mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              className="absolute top-4 right-4 text-gray-700 text-2xl font-bold"
              onClick={() => setModalProject(null)}
            >
              &times;
            </button>
            <img
              src={modalProject.image}
              alt={modalProject.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {modalProject.title}
              </h3>
              <p className="text-gray-700 mb-2">{modalProject.category}</p>
              <p className="text-gray-600">{modalProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
