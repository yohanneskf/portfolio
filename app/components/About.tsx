// app/components/About.tsx
"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Computer Science Engineering student with a passion for building
            scalable web applications and solving complex problems through code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Education & Experience
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Bachelor of Technology in CSE
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      4th Year Student
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Current GPA: 3.8/4.0
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Full-Stack Experience</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      3+ Years of Development
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      15+ Projects Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-500" size={24} />
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Award className="text-purple-500" size={24} />
                <div>
                  <h4 className="font-bold">Certifications</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    AWS Certified, React Advanced, Node.js Expert
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 dark:border-purple-600/20">
                <h4 className="font-bold text-lg mb-3">My Philosophy</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  I believe in writing clean, maintainable code and creating
                  user experiences that are both beautiful and functional. Every
                  project is an opportunity to learn and grow.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
