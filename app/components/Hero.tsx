"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Sparkles,
  Code,
  Globe,
  Award,
} from "lucide-react";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "4th Year CSE Student",
    "UI/UX Enthusiast",
    "Cloud Architect",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Option 1: Direct link to PDF file in public folder
    const cvPath = "/Yohannes-Kifle-Tekebay-FlowCV-Resume-20251213 (2).pdf"; // Change this to your actual CV file name

    // Create an anchor element
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Yohannes_Kifle_CV.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Alternative: If you want to open in new tab instead of download
  const handleViewCV = () => {
    window.open(
      "/Yohannes-Kifle-Tekebay-FlowCV-Resume-20251213 (2).pdf",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-[#050505] pt-20 pb-6"
    >
      {/* --- BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* --- LEFT CONTENT (Col: 7) --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm mb-8"
            >
              <Sparkles className="text-blue-500" size={16} />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Available for New Opportunities
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white leading-[1.1] mb-6">
              Engineering <br />
              <span className="relative">
                Digital
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 10"
                  fill="none"
                >
                  <path
                    d="M1 9C50 2 150 2 299 9"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <div className="h-[1.2em] mt-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    exit={{ opacity: 0, filter: "blur(10px)", y: -10 }}
                    className="text-blue-600 dark:text-blue-500 text-5xl"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed font-medium">
              I specialize in building high-performance web systems that bridge
              the gap between design and functionality.
            </p>

            <div className="flex flex-wrap gap-5">
              {/* Download CV Button */}
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-bold flex items-center gap-3 shadow-lg hover:shadow-blue-500/25 transition-shadow"
              >
                <Download size={18} />
                Download CV
              </motion.button>
            </div>
          </motion.div>

          {/* --- RIGHT CONTENT (Col: 5) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative order-1 lg:order-2"
          >
            <div className="relative z-10 w-full aspect-[4/5] max-w-md mx-auto">
              {/* Glassmorphism Background for Image */}
              <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-2xl rounded-[3rem] border border-white/20 dark:border-gray-800 shadow-2xl" />

              {/* Image Container */}
              <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden group">
                <Image
                  src="/profile.png" // Place your photo in /public/profile.png
                  alt="Yohannes Kifle"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* --- FLOATING COMPONENTS --- */}
              {/* Badge 1: Experience */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-10 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black dark:text-white">31+</h4>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">
                    Repos Pushed
                  </p>
                </div>
              </motion.div>

              {/* Badge 2: Projects */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 -right-12 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black dark:text-white">Live</h4>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">
                    Deployments
                  </p>
                </div>
              </motion.div>

              {/* Badge 3: Status */}
              <div className="absolute -bottom-6 left-10 bg-white dark:bg-gray-900 px-6 py-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-bold dark:text-white">
                  Active Developer
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
