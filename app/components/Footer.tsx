// app/components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="text-blue-500" size={24} />
              <span className="text-xl font-bold text-white">Portfolio</span>
            </div>
            <p className="text-sm">
              Building the future one line of code at a time.
            </p>
          </motion.div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Technologies</h4>
            <ul className="space-y-2">
              {["React", "Next.js", "Node.js", "Python", "MongoDB"].map(
                (tech) => (
                  <li key={tech} className="text-sm">
                    {tech}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <p className="text-sm mb-4">
              Let&apos;s build something amazing together!
            </p>
            <a
              href="mailto:you@example.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              you@example.com
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="flex items-center justify-center gap-2 text-sm">
            © {currentYear} Made with{" "}
            <Heart size={16} className="text-red-500 animate-pulse" />
            by a passionate developer
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Built with Next.js 16, React 19, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
