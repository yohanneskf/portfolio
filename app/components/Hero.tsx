// app/components/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "4th Year CSE Student",
    "React & Next.js Expert",
    "Backend Specialist",
    "Python Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com", label: "GitHub" },
    {
      icon: <Linkedin size={24} />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={24} />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:you@example.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-32 h-32 mx-auto lg:mx-0 mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
            >
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  FS
                </div>
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I&apos;m a{" "}
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              >
                {roles[currentRole]}
              </motion.span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Passionate about creating exceptional digital experiences.
              Specialized in modern web technologies with expertise in both
              frontend and backend development.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                View Projects
              </motion.a>
              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <Download size={20} />
                Download CV
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center lg:justify-start gap-6 mt-12"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-gray-800 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { name: "Python", color: "from-yellow-500 to-blue-500" },
                    { name: "C++", color: "from-blue-500 to-blue-700" },
                    { name: "Java", color: "from-red-500 to-orange-500" },
                    {
                      name: "JavaScript",
                      color: "from-yellow-400 to-yellow-600",
                    },
                    { name: "React", color: "from-cyan-500 to-blue-500" },
                    { name: "Next.js", color: "from-gray-800 to-gray-900" },
                    { name: "Node.js", color: "from-green-500 to-green-700" },
                    { name: "MongoDB", color: "from-green-400 to-green-600" },
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} text-white text-center font-semibold shadow-lg`}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#skills"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
