"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  MessageSquare,
  User,
  FileText,
  Sparkles,
  ArrowUpRight,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-white dark:bg-[#050505]"
    >
      {/* Background Aesthetic Elements */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Info */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 mb-6">
                <Sparkles size={14} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Let's Connect
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white leading-tight mb-6">
                Ready to start your next{" "}
                <span className="text-blue-600">big thing?</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                Currently available for freelance projects and full-time
                opportunities. I usually respond within{" "}
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  24 hours
                </span>
                .
              </p>
            </motion.div>

            {/* Quick Contact Cards */}
            <div className="grid gap-4">
              {[
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  val: "yourname@email.com",
                  color: "blue",
                },
                {
                  icon: <Linkedin size={20} />,
                  label: "LinkedIn",
                  val: "in/yourprofile",
                  color: "purple",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white dark:bg-black text-blue-600 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {item.val}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="text-gray-300 group-hover:text-blue-500 transition-colors"
                    size={18}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: The Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your vision..."
                    className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white font-medium resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/20 ${
                    isSubmitted
                      ? "bg-green-500 text-white"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Sent Successfully
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Launch Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer Credits */}
        <div className="mt-24 pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400 font-medium italic">
            Built with ❤️ in Adama, Ethiopia.
          </p>
          <div className="flex gap-6 text-gray-400 font-bold uppercase text-[10px] tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
