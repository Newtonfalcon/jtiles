"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/* ================= DATA ================= */
const contactDetails = [
  {
    type: "Address",
    value: "No 5, Fafolu Street, Olorunsogo Bus Stop, Mushin, Lagos",
    icon: MapPin,
  },
  {
    type: "Email",
    value: "contact@greatjtiles.com",
    icon: Mail,
  },
  {
    type: "Phone",
    value: "07060539767",
    icon: Phone,
  },
  {
    type: "WhatsApp",
    value: "+234 706 053 9767",
    icon: MessageSquare,
  },
];

const mapLocations = [
  {
    name: "Main Office",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.019091593943!2d3.357144915284938!3d6.529936995298037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf3f3a5678f17%3A0x77e17aabb8ef7c1!2sOlorunsogo%20Bus%20Stop%2C%20Mushin%2C%20Lagos!5e0!3m2!1sen!2sng!4v1702750000000!5m2!1sen!2sng",
  },
];

/* ================= COMPONENT ================= */
export default function ContactPage() {
  return (
    <>
    <Navbar/>
    <div className="bg-white text-[#1A1A1A]">

      {/* ================= HERO ================= */}
      <section className="py-28 px-6 md:px-12 text-center bg-[#0B1C3F] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-6">
            Get in Touch
          </h1>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mb-6" />
          <p className="text-gray-300 text-lg leading-relaxed">
            We’d love to hear from you. Whether you’re planning a project, have questions, or need a consultation, our team is ready to assist.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 my-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition duration-500 bg-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#C6A75E]/10 text-[#C6A75E] mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#0B1C3F]">{item.type}</h3>
                <p className="text-gray-600 text-center">{item.value}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-32">
        {mapLocations.map((map, index) => (
          <motion.div
            key={index}
            className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <iframe
              src={map.embedUrl}
              className="w-full h-96 md:h-[500px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        ))}
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-3xl shadow-lg p-12"
        >
          <h2 className="text-3xl font-light mb-8 text-center text-[#0B1C3F]">Send a Message</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C6A75E]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C6A75E]"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C6A75E]"
            />
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#C6A75E] text-white font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-[#C6A75E]/20"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-32 px-6 md:px-12 text-center bg-[#0B1C3F] text-white rounded-t-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-14"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-200 mb-10 text-lg">
            Contact us today and let’s bring your interior vision to life.
          </p>
          <a
            href="mailto:contact@greatjtiles.com"
            className="px-10 py-4 rounded-full bg-[#C6A75E] text-[#0B1C3F] font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-[#C6A75E]/20 inline-block"
          >
            Request a Consultation
          </a>
        </motion.div>
      </section>

    </div>
    <Footer/>
    </>
  );
}
