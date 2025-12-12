"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Layout,
  Sparkles,
  Shield,
  Zap,
  Cloud,
  GitBranch,
  Terminal,
  FileCode,
  Layers,
  Cpu,
  Globe,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <Layout className="text-blue-500" size={22} />,
    description: "Architecting interactive & responsive interfaces",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Systems",
    icon: <Server className="text-purple-500" size={22} />,
    description: "Building robust APIs and server-side logic",
    skills: ["Node.js", "Python", "Java", "Express.js", "C++"],
  },
  {
    title: "Cloud & Databases",
    icon: <Database className="text-emerald-500" size={22} />,
    description: "Managing data & scalable infrastructure",
    skills: ["MongoDB", "PostgreSQL", "Prisma", "AWS", "Docker"],
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const tagVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200 },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-white dark:bg-[#050505]"
    >
      {/* Background Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full -z-10"
      />

      <div className="container mx-auto px-6 lg:px-16">
        {/* Animated Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Cpu size={14} />
            </motion.div>
            <span className="text-xs font-bold uppercase tracking-wider">
              Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white"
          >
            Technical <span className="text-blue-600">Arsenal.</span>
          </motion.h2>
        </div>

        {/* Categories Grid with Staggered Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 mb-6"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 group relative overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-12 h-12 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 flex items-center justify-center mb-6 shadow-sm"
              >
                {category.icon}
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 font-medium leading-relaxed">
                {category.description}
              </p>

              <motion.div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    variants={tagVariants}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                    }}
                    className="px-4 py-2 rounded-xl bg-white dark:bg-black border border-gray-100 dark:border-gray-800 text-xs font-bold text-gray-700 dark:text-gray-300 shadow-sm cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Animated Corner Decoration */}
              <Code2 className="absolute -bottom-6 -right-6 w-24 h-24 text-gray-200 dark:text-gray-800/20 group-hover:scale-125 transition-transform duration-700" />
            </motion.div>
          ))}
        </motion.div>

        {/* The "Experience Values" Highlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-700 to-violet-800 text-white relative overflow-hidden group shadow-xl shadow-blue-500/20"
        >
          <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap />,
                label: "Performance",
                desc: "Optimized & Snappy",
              },
              { icon: <Shield />, label: "Security", desc: "Hardened & Safe" },
              { icon: <Globe />, label: "Scalable", desc: "Cloud Ready" },
              {
                icon: <FileCode />,
                label: "Clean Code",
                desc: "Maintainable Logic",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="p-3 bg-white/10 rounded-2xl backdrop-blur-md mb-4 border border-white/20"
                >
                  {item.icon}
                </motion.div>
                <h4 className="font-bold text-lg mb-1">{item.label}</h4>
                <p className="text-xs opacity-70 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Animated Background Layers */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -right-24 p-8 opacity-10 pointer-events-none"
          >
            <Layers size={400} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
