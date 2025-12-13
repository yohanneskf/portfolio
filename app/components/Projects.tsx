"use client";

import { motion, Variants } from "framer-motion";
import {
  Github,
  ExternalLink,
  Terminal,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-featured online shopping platform with cart, checkout, and payment integration.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Full Stack",
    image: "🛒",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    description:
      "Instant messaging application with real-time updates and multimedia support.",
    technologies: ["React", "Socket.io", "Express", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Real-Time",
    image: "💬",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    id: 3,
    title: "Music Streaming Service",
    description:
      "Feature-rich music streaming platform with playlist creation and recommendations.",
    technologies: ["PostgreSQL", "AWS S3", "React", "Node.js"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Media",
    image: "🎵",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    id: 4,
    title: "Finance Tracker",
    description:
      "Personal finance management tool with budgeting, analytics, and data visualization.",
    technologies: ["Next.js", "Prisma", "Chart.js", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Finance",
    image: "💰",
    gradient: "from-orange-600 to-red-500",
  },
];

// Strictly typed container variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Strictly typed card variants
const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-white dark:bg-[#050505]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0,transparent_70%)] -z-10" />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 mb-6"
          >
            <Layers size={14} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Portfolio
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white mb-6"
          >
            Featured <span className="text-blue-600">Creations.</span>
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium max-w-xl">
            A selection of my recent works, ranging from full-stack platforms to
            specialized AI tools.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col rounded-[2.5rem] bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden transition-all"
            >
              <div
                className={`relative h-64 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-8xl filter drop-shadow-2xl z-10"
                >
                  {project.image}
                </motion.span>
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center gap-4">
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-white text-black rounded-full shadow-xl"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-blue-600 text-white rounded-full shadow-xl"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <Sparkles
                    size={20}
                    className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-8 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-white dark:bg-black border border-gray-100 dark:border-gray-800 text-[10px] font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5"
                    >
                      <Terminal size={12} className="text-blue-500" />
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white"
                >
                  View Details{" "}
                  <ArrowRight size={16} className="text-blue-600" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-[2rem] bg-gray-50 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              Looking for more?
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Explore my code architecture and documentation on GitHub.
            </p>
          </div>
          <motion.a
            href="https://github.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold flex items-center gap-3 shadow-lg"
          >
            <Github size={20} />
            Browse Repositories
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
