// app/components/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  ExternalLink,
  Code,
  Server,
  Database,
  Layout,
  Eye,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-featured online shopping platform with cart, checkout, and payment integration.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    category: "Full Stack",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    icon: "🛒",
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    description:
      "Instant messaging application with real-time updates and multimedia support.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    category: "Real-Time",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    icon: "💬",
  },
  {
    id: 3,
    title: "Music Streaming Service",
    description:
      "Feature-rich music streaming platform with playlist creation and recommendations.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    category: "Media",
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
    icon: "🎵",
  },
  {
    id: 4,
    title: "Image Processing Tool",
    description:
      "Advanced image editing and processing application with cloud storage.",
    technologies: ["Python", "OpenCV", "React", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    category: "AI/ML",
    color: "bg-gradient-to-r from-orange-500 to-red-500",
    icon: "🖼️",
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "Comprehensive platform for online courses with progress tracking.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    category: "Education",
    color: "bg-gradient-to-r from-indigo-500 to-purple-500",
    icon: "📚",
  },
  {
    id: 6,
    title: "Finance Tracker",
    description:
      "Personal finance management tool with budgeting and analytics.",
    technologies: ["React", "Express.js", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    category: "Finance",
    color: "bg-gradient-to-r from-teal-500 to-cyan-500",
    icon: "💰",
  },
];

// Icon mapping with simpler approach
const getTechIcon = (tech: string): JSX.Element => {
  const techLower = tech.toLowerCase();

  const iconMap: { [key: string]: JSX.Element } = {
    react: <Layout size={16} className="text-cyan-500" />,
    "next.js": <Code size={16} className="text-gray-800 dark:text-gray-300" />,
    nodejs: <Server size={16} className="text-green-500" />,
    mongodb: <Database size={16} className="text-green-400" />,
    stripe: <span>💳</span>,
    "socket.io": <span>⚡</span>,
    postgresql: <Database size={16} className="text-blue-500" />,
    python: <span>🐍</span>,
    opencv: <span>👁️</span>,
    firebase: <span>🔥</span>,
    prisma: <span>⚡</span>,
    tailwind: <span>🎨</span>,
    "express.js": (
      <Server size={16} className="text-gray-600 dark:text-gray-400" />
    ),
    "chart.js": <span>📊</span>,
    aws: <span>☁️</span>,
  };

  // Check for exact match or partial match
  const icon = iconMap[techLower] ||
    iconMap[techLower.replace(".js", "")] ||
    iconMap[techLower.replace(".", "")] || (
      <Code size={16} className="text-gray-500" />
    );

  return icon;
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative backdrop-blur-md bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden h-full group-hover:border-blue-500/50 transition-colors">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 ${project.color} flex items-center justify-center`}
                  >
                    <span className="text-6xl">{project.icon}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/50 flex items-center gap-1"
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center gap-2"
                    >
                      <Eye size={16} />
                      View Details
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-blue-500 text-blue-500 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
