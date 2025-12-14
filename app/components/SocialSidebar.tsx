"use client";
import { motion, Variants } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, useEffect } from "react";

const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 1.5, staggerChildren: 0.1 },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function SocialSidebar() {
  const [isMobile, setIsMobile] = useState(false);

  const socials = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: "https://github.com/yohanneskf",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://et.linkedin.com/in/yohannes-kifle-63415236a",
    },
    {
      name: "Telegram",
      icon: <Send size={20} />,
      href: "https://t.me/joh5k",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      href: "mailto:yohanneskifle540@gmail.com",
    },
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint is 1024px
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Mobile-specific variants
  const mobileSidebarVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 1.5, staggerChildren: 0.1 },
    },
  };

  return (
    <>
      {/* Desktop Version (hidden on mobile) */}
      <motion.div
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        className="fixed left-6 bottom-0 z-50 hidden lg:flex flex-col items-center gap-6"
      >
        <div className="flex flex-col gap-5">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              variants={iconVariants}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1, color: "#3b82f6" }}
              className="group relative p-3 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200 dark:border-gray-800 text-gray-500 transition-all shadow-sm"
            >
              {social.icon}
              <span className="absolute left-14 opacity-0 group-hover:opacity-100 transition-opacity bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold py-1 px-2 rounded uppercase tracking-widest whitespace-nowrap">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 120 }}
          transition={{ delay: 2, duration: 1 }}
          className="w-px bg-gradient-to-t from-transparent via-gray-300 dark:via-gray-700 to-gray-300 dark:to-gray-700"
        />
      </motion.div>

      {/* Mobile Version (visible only on mobile) */}
      <motion.div
        variants={mobileSidebarVariants}
        initial="hidden"
        animate="visible"
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex lg:hidden"
      >
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-800 shadow-lg">
          {socials.map((social) => (
            <motion.a
              key={`mobile-${social.name}`}
              variants={iconVariants}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1, color: "#3b82f6" }}
              whileTap={{ scale: 0.95 }}
              className="relative p-3 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200 dark:border-gray-800 text-gray-500 transition-all shadow-sm"
            >
              {social.icon}
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold py-1 px-2 rounded uppercase tracking-widest whitespace-nowrap">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
