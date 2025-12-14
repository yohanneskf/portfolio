"use client";

import { motion, Variants } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Sparkles,
  Code2,
  Cpu,
  Globe2,
  Zap,
  Terminal,
  MousePointer2,
} from "lucide-react";

// Strictly typed variants to satisfy TypeScript and Vercel build
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-white dark:bg-[#050505]"
    >
      {/* Moving Background Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10"
      />

      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={14} />
            </motion.div>
            <span className="text-xs font-bold uppercase tracking-wider">
              My Story
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white leading-tight"
          >
            I build digital bridges between <br />
            <motion.span
              initial={{ backgroundPosition: "200% 0" }}
              whileInView={{ backgroundPosition: "0% 0" }}
              transition={{ duration: 1.5 }}
              className="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              code
            </motion.span>{" "}
            and human experience.
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* EDUCATION */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="md:col-span-2 p-8 rounded-[2.5rem] bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 relative overflow-hidden group shadow-sm"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20"
                >
                  <GraduationCap size={28} />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Education
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
                  4th Year{" "}
                  <span className="text-blue-600 font-bold">
                    {" "}
                    Computer Science and Engineering
                  </span>
                  . student at Adama Science and Technology University.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <span className="px-4 py-2 rounded-full bg-white dark:bg-black border dark:border-gray-800 text-xs font-bold text-gray-500 italic">
                  2021 — 2025
                </span>
                <span className="px-4 py-2 rounded-full bg-blue-500 text-white text-xs font-bold">
                  Actively Learning
                </span>
              </div>
            </div>
            <Cpu className="absolute -bottom-10 -right-10 w-64 h-64 text-gray-200 dark:text-gray-800/30 group-hover:scale-125 group-hover:rotate-12 transition-all duration-1000" />
          </motion.div>

          {/* LOCATION */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-violet-700 text-white shadow-xl relative overflow-hidden group"
          >
            <MapPin size={32} className="mb-6 opacity-90" />
            <h4 className="text-2xl font-bold mb-2">Location</h4>
            <p className="opacity-80 font-medium mb-8 text-sm">
              Adama, Ethiopia. Available for remote collaboration.
            </p>

            <div className="w-full aspect-square rounded-3xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="opacity-30"
              >
                <Globe2 size={120} />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)]"
              />
            </div>
          </motion.div>

          {/* EXPERIENCE STATS */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="p-8 rounded-[2.5rem] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex flex-col justify-between"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Zap className="text-yellow-500 mb-6" size={32} />
            </motion.div>
            <div>
              <h4 className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter">
                3+
              </h4>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mt-2 mb-6">
                Experience Years
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
              "Every problem is an opportunity to build something robust."
            </p>
          </motion.div>

          {/* PHILOSOPHY/FOCUS */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="md:col-span-2 p-8 rounded-[2.5rem] bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 relative group overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Terminal className="text-blue-600" size={20} />
                  <span className="font-bold text-xs uppercase tracking-widest text-gray-400">
                    Technical Focus
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["System Arch", "Full-Stack", "UI/UX"].map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="px-3 py-1.5 rounded-xl bg-white dark:bg-black border dark:border-gray-800 text-[10px] font-bold"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="md:border-l dark:border-gray-800 md:pl-8">
                <div className="flex items-center gap-3 mb-3">
                  <MousePointer2 className="text-purple-600" size={18} />
                  <h4 className="font-bold text-xs uppercase text-gray-400">
                    Philosophy
                  </h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  Clean code is not a preference; it is a professional standard.
                </p>
              </div>
            </div>
            <Code2
              size={120}
              className="absolute -bottom-10 -right-10 opacity-5 group-hover:rotate-12 transition-transform"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
