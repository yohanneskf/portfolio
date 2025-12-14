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

    // In a real application, you would send this to your backend
    // For now, we'll simulate an API call and open email client

    // Open user's email client with pre-filled data
    const mailtoLink = `mailto:yohanneskifle540@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Inquiry"
    )}&body=${encodeURIComponent(
      `Hello Yohannes,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    )}`;

    window.open(mailtoLink, "_blank");

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1500));

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

  // Contact methods with actual links
  const contactMethods = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "yohanneskifle540@gmail.com",
      link: "mailto:yohanneskifle540@gmail.com?subject=Portfolio%20Inquiry",
      description: "Direct email contact",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "in/yohannes-kifle",
      link: "https://linkedin.com/in/yohannes-kifle", // Update with your actual LinkedIn
      description: "Professional network",
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "@YohannesKifle",
      link: "https://github.com/YohannesKifle", // Update with your GitHub
      description: "Code repositories",
    },
    {
      icon: <Twitter size={20} />,
      label: "Twitter / X",
      value: "@yourusername",
      link: "https://twitter.com/yourusername", // Update if you have
      description: "Social updates",
    },
  ];

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
              {contactMethods.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-between group cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl bg-white dark:bg-black shadow-sm ${
                        item.label === "Email"
                          ? "text-blue-600"
                          : item.label === "LinkedIn"
                          ? "text-blue-700"
                          : item.label === "GitHub"
                          ? "text-gray-900 dark:text-white"
                          : "text-sky-500"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {item.value}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="text-gray-300 group-hover:text-blue-500 transition-colors"
                    size={18}
                  />
                </motion.a>
              ))}
            </div>

            {/* Direct Email Button */}
            <motion.a
              href="mailto:yohanneskifle540@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold shadow-lg hover:shadow-blue-500/25 transition-shadow"
            >
              <Mail size={18} />
              Email Me Directly
            </motion.a>
          </div>

          {/* Right Column: The Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 relative">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                  Send a Message
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below or email me directly at{" "}
                  <a
                    href="mailto:yohanneskifle540@gmail.com"
                    className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
                  >
                    yohanneskifle540@gmail.com
                  </a>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1 flex items-center gap-2">
                      <User size={12} /> Your Name
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
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1 flex items-center gap-2">
                      <Mail size={12} /> Email Address
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
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1 flex items-center gap-2">
                    <FileText size={12} /> Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1 flex items-center gap-2">
                    <MessageSquare size={12} /> Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, and budget..."
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
                      : "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Launch Message
                    </>
                  )}
                </motion.button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-sm"
                  >
                    ✓ Message sent! I've opened your email client. Please send
                    the email to complete the process.
                  </motion.div>
                )}
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
            <a
              href="https://linkedin.com/in/yohannes-kifle"
              target="_blank"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/YohannesKifle"
              target="_blank"
              className="hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:yohanneskifle540@gmail.com"
              className="hover:text-blue-600 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
