"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Heart,
  ArrowUp,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white dark:bg-[#050505] pt-24 pb-12 overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Code2 size={22} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white uppercase">
                Portfolio
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-medium max-w-sm leading-relaxed mb-8">
              Engineering high-performance digital solutions with a focus on
              clean architecture and human-centric design.
            </p>
          </motion.div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                Navigation
              </h4>
              <ul className="space-y-4">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                Tech Stack
              </h4>
              <ul className="space-y-4">
                {[
                  "React 19",
                  "Next.js 15",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                ].map((tech) => (
                  <li
                    key={tech}
                    className="text-sm font-semibold text-gray-400 italic"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Back to Top Feature */}
            <div className="flex flex-col items-center sm:items-end justify-center">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-2xl shadow-blue-500/40 group overflow-hidden relative"
              >
                <motion.div
                  animate={{ y: [0, -40, 40, 0] }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-10 group-hover:block hidden"
                >
                  <ArrowUp size={24} />
                  <ArrowUp size={24} />
                </motion.div>
                <ArrowUp size={24} className="group-hover:hidden" />
              </motion.button>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 mt-4">
                Top
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
            <span>© {currentYear}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>Adama, Ethiopia</span>
          </div>

          <p className="flex items-center gap-2 text-xs font-bold text-gray-500">
            Designed & Developed with{" "}
            <Heart
              size={14}
              className="text-red-500 fill-red-500 animate-pulse"
            />{" "}
            by Yohannes kifle
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors"
            >
              Status
            </a>
            <a
              href="#"
              className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
