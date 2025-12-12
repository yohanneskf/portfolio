"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Code2,
  Home,
  User,
  Briefcase,
  Mail,
  Terminal,
  ArrowRight,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: <Home size={20} />, href: "#home" },
  { name: "About", icon: <User size={20} />, href: "#about" },
  { name: "Skills", icon: <Terminal size={20} />, href: "#skills" },
  { name: "Projects", icon: <Briefcase size={20} />, href: "#projects" },
  { name: "Contact", icon: <Mail size={20} />, href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      setTimeout(() => {
        elem.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 py-3 shadow-sm border-b border-gray-200/50 dark:border-gray-800/50"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 relative z-[110]">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Code2 className="text-white" size={22} />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Yohannes<span className="text-blue-600">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-gray-100/50 dark:bg-gray-800/50 p-1.5 rounded-full border border-gray-200/50 dark:border-gray-700/50">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-[110] p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white transition-active active:scale-90"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[105] bg-white dark:bg-gray-900 px-8 py-24"
          >
            <div className="flex flex-col h-full">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
                Menu
              </p>

              <nav className="flex flex-col space-y-6">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    onPointerDown={() => handleNav(item.href)}
                    className="flex items-center justify-between group text-left"
                  >
                    <div className="flex items-center space-x-6">
                      <div
                        className={`p-3 rounded-xl transition-colors ${
                          activeSection === item.href.substring(1)
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <span
                        className={`text-3xl font-bold transition-colors ${
                          activeSection === item.href.substring(1)
                            ? "text-blue-600"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                    <ArrowRight
                      className="text-gray-300 dark:text-gray-700 group-hover:text-blue-600 transition-colors"
                      size={24}
                    />
                  </motion.button>
                ))}
              </nav>

              <div className="mt-auto pt-10 border-t border-gray-100 dark:border-gray-800">
                <p className="text-gray-500 text-sm mb-4">
                  Let&apos;s build something together.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600" />
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
