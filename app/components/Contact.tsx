"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Send,
  CheckCircle,
  User,
  FileText,
  Sparkles,
  ArrowUpRight,
  Linkedin,
  Github,
  MessageSquare,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // EmailJS Configuration - UPDATE THESE VALUES AFTER SETUP
  const EMAILJS_SERVICE_ID = "service_tqenp6c"; // Change to your service ID
  const EMAILJS_TEMPLATE_ID = "template_s0ow9d7"; // Change to your template ID
  const EMAILJS_PUBLIC_KEY = "Rzw3vAdGQ1xBClBkW"; // Change to your public key

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!formRef.current) {
      setError("Form not found. Please refresh the page.");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        formRef.current.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(
        "Failed to send message. Please email me directly at yohanneskifle540@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
      value: "yohannes kifle",
      link: "https://et.linkedin.com/in/yohannes-kifle-63415236a",
      description: "Professional network",
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "YohannesKifle",
      link: "https://github.com/Yohanneskf",
      description: "Code repositories",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-white dark:bg-[#050505]"
    >
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
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
                Get in <span className="text-blue-600">touch</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                Have a project in mind? Let's work together. Send me a message
                and I'll respond within{" "}
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  24 hours
                </span>
                .
              </p>
            </motion.div>

            {/* Contact Cards */}
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
                    <div className="p-3 rounded-xl bg-white dark:bg-black shadow-sm text-blue-600">
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
          </div>

          {/* Right Column - Form */}
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
                  Fill out the form below. No redirects needed.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Status Messages */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className="text-red-600 mt-0.5" size={18} />
                      <div>
                        <p className="text-red-700 dark:text-red-300 font-medium">
                          {error}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" size={24} />
                      <div>
                        <h4 className="font-bold text-green-800 dark:text-green-300">
                          Message Sent! 🎉
                        </h4>
                        <p className="text-sm text-green-700 dark:text-green-400">
                          Thanks for reaching out. I'll respond soon.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1 flex items-center gap-2">
                      <User size={12} /> Name
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      disabled={isSubmitting}
                      placeholder="Your name"
                      className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1 flex items-center gap-2">
                      <Mail size={12} /> Email
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      disabled={isSubmitting}
                      placeholder="your@email.com"
                      className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
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
                    required
                    disabled={isSubmitting}
                    placeholder="Project Inquiry / Collaboration"
                    className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1 flex items-center gap-2">
                    <MessageSquare size={12} /> Message
                  </label>
                  <textarea
                    name="message"
                    required
                    disabled={isSubmitting}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white font-medium resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={
                    !isSubmitting && !isSubmitted ? { scale: 1.01 } : {}
                  }
                  whileTap={
                    !isSubmitting && !isSubmitted ? { scale: 0.98 } : {}
                  }
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all shadow-xl ${
                    isSubmitted
                      ? "bg-green-500 text-white cursor-default"
                      : isSubmitting
                      ? "bg-blue-500/50 text-white cursor-wait"
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
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400 font-medium italic">
            Built with ❤️ in Adama, Ethiopia.
          </p>
          <div className="flex gap-6 text-gray-400 font-bold uppercase text-[10px] tracking-widest">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                {method.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
