"use client";

import { motion, Variants } from "framer-motion";
import {
  Github,
  ExternalLink,
  Terminal,
  Layers,
  Sparkles,
  ArrowRight,
  ShoppingCart,
  Briefcase,
  FlaskConical,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack online shopping platform with cart functionality, secure checkout, and Stripe payment integration. Features product browsing, user authentication, and order management.",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "TypeScript"],
    githubUrl: "#", // Add your GitHub repo URL
    liveUrl: "https://e-commerce-nextjs-stripe-full-stuck.vercel.app/",
    category: "Full Stack",
    image: "🛒",
    gradient: "from-blue-600 to-cyan-500",
    icon: <ShoppingCart className="w-12 h-12" />,
    status: "Live",
    features: ["Payment Processing", "User Dashboard", "Product Management"],
  },
  {
    id: 2,
    title: "Job Board Platform",
    description:
      "A job searching and posting platform with user authentication, job filtering, and application tracking. Companies can post jobs while job seekers can search and apply.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "#", // Add your GitHub repo URL
    liveUrl: "https://job-board-job-posting-website-6tmf.vercel.app/",
    category: "Web Application",
    image: "💼",
    gradient: "from-purple-600 to-pink-500",
    icon: <Briefcase className="w-12 h-12" />,
    status: "Live",
    features: ["Job Posting", "Search Filters", "Application Tracking"],
  },
  {
    id: 3,
    title: "Lab Assistant Scheduler",
    description:
      "A university lab management system for scheduling lab assistants, tracking lab sessions, and managing student assignments. Features calendar integration and role-based access.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "#", // Add your GitHub repo URL
    liveUrl: "https://lab-assistant-s9fg.vercel.app/",
    category: "Management System",
    image: "🔬",
    gradient: "from-emerald-600 to-teal-500",
    icon: <FlaskConical className="w-12 h-12" />,
    status: "Live",
    features: ["Calendar Scheduling", "Role Management", "Attendance Tracking"],
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
              Real Projects
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white mb-6"
          >
            Production <span className="text-blue-600">Projects.</span>
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium max-w-xl">
            Here are my fully deployed and functional web applications. Each
            project solves real-world problems with modern technologies.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col rounded-[2.5rem] bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden transition-all h-full"
            >
              <div
                className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-6xl filter drop-shadow-2xl z-10"
                >
                  {project.icon}
                </motion.div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-green-700 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    {project.status}
                  </span>
                </div>
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
                    target="_blank"
                    rel="noopener noreferrer"
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
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <Sparkles
                    size={20}
                    className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
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

                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between group/link text-sm font-bold text-gray-900 dark:text-white mt-auto pt-4 border-t border-gray-200 dark:border-gray-800"
                >
                  <span className="flex items-center gap-2">
                    Visit Live Site
                    <ArrowRight
                      size={16}
                      className="text-blue-600 group-hover/link:translate-x-1 transition-transform"
                    />
                  </span>
                  <span className="text-xs text-gray-500 font-normal">
                    {project.liveUrl.replace("https://", "").split("/")[0]}
                  </span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-[2rem] bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              Want to see the code?
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              All projects have clean, documented code on GitHub with detailed
              READMEs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://github.com/YohannesKifle"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg"
            >
              <Github size={20} />
              Browse GitHub Profile
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-blue-500/25"
            >
              <ExternalLink size={20} />
              Discuss a Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
