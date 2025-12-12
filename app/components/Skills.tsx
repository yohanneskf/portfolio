// app/components/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Server,
  Database,
  Layout,
  Cpu,
  GitBranch,
  Shield,
  Zap,
  Cloud,
  Terminal,
  Docker,
  Aws,
  FileCode,
  Package,
  CpuIcon,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="text-blue-500" size={24} />,
    skills: [
      { name: "React.js", level: 95, color: "from-cyan-500 to-blue-500" },
      {
        name: "Next.js",
        level: 90,
        color: "from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800",
      },
      { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
      { name: "HTML/CSS", level: 98, color: "from-orange-500 to-pink-500" },
      { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-cyan-500" },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="text-green-500" size={24} />,
    skills: [
      { name: "Node.js", level: 90, color: "from-green-500 to-green-700" },
      {
        name: "Express.js",
        level: 88,
        color: "from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700",
      },
      { name: "Python", level: 85, color: "from-yellow-500 to-blue-500" },
      { name: "Java", level: 80, color: "from-red-500 to-orange-500" },
      { name: "C++", level: 75, color: "from-blue-500 to-blue-700" },
    ],
  },
  {
    title: "Database & Tools",
    icon: <Database className="text-purple-500" size={24} />,
    skills: [
      { name: "MongoDB", level: 85, color: "from-green-400 to-green-600" },
      { name: "SQL/Prisma", level: 82, color: "from-blue-400 to-indigo-500" },
      { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
      { name: "Docker", level: 75, color: "from-blue-400 to-cyan-500" },
      { name: "AWS", level: 70, color: "from-yellow-500 to-orange-500" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
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
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here&apos;s a comprehensive overview of my technical expertise and
            proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="backdrop-blur-md bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-600/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: index * 0.1 + categoryIndex * 0.2,
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 backdrop-blur-md bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              {
                icon: <FileCode />,
                label: "Clean Code",
                desc: "Readable & Maintainable",
              },
              { icon: <Zap />, label: "Fast", desc: "Optimized Performance" },
              { icon: <Shield />, label: "Secure", desc: "Best Practices" },
              { icon: <Cloud />, label: "Scalable", desc: "Cloud Ready" },
              { icon: <GitBranch />, label: "Versioned", desc: "Git Workflow" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-3">
                  {item.icon}
                </div>
                <h4 className="font-bold">{item.label}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
