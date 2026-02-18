"use client";

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

/* ================= DATA ================= */

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Services", url: "/services" },
      { name: "Projects", url: "/projects" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Tile Supply", url: "/services" },
      { name: "Interior Design", url: "/services" },
      { name: "Installation", url: "/services" },
      { name: "Remodeling", url: "/services" },
    ],
  },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "No 5, Fafolu Street, Mushin, Lagos",
  },
  {
    icon: Phone,
    text: "07060539767",
  },
  {
    icon: Mail,
    text: "contact@greatjtiles.com",
  },
];

const socialLinks = [
  { icon: Facebook, url: "#" },
  { icon: Instagram, url: "#" },
  { icon: Twitter, url: "#" },
];

/* ================= COMPONENT ================= */

export default function Footer() {
  return (
    <footer className="bg-[#0B1C3F] text-white pt-24 pb-12 px-6 md:px-12">

      {/* ================= TOP SECTION ================= */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-light mb-6">
            GreatJ Tiles
          </h2>
          <div className="w-16 h-[2px] bg-[#C6A75E] mb-6" />
          <p className="text-gray-300 leading-relaxed mb-8">
            Delivering premium tile solutions and luxury interior finishing
            services across Lagos with precision and excellence.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-[#0B1C3F] transition duration-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-6">
              {section.title}
            </h3>
            <div className="w-12 h-[2px] bg-[#C6A75E] mb-6" />
            <ul className="space-y-4">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-[#C6A75E] transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Contact
          </h3>
          <div className="w-12 h-[2px] bg-[#C6A75E] mb-6" />
          <ul className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} className="flex items-start gap-4">
                  <Icon size={18} className="text-[#C6A75E] mt-1" />
                  <span className="text-gray-300">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-[#C6A75E]/30 mt-20 pt-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Great-JTiles. All Rights Reserved.
      </div>

    </footer>
  );
}
