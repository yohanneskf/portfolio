// app/projects/data.ts
import {
  ShoppingCart,
  MessageSquare,
  Music,
  Camera,
  BookOpen,
  CreditCard,
  Cloud,
  BarChart,
} from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  color: string;
  icon: React.ComponentType<any>;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern E-Commerce",
    description:
      "Full-featured shopping platform with cart, checkout, and payment processing.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Full Stack",
    color: "from-blue-500 to-cyan-500",
    icon: ShoppingCart,
  },
  {
    id: 2,
    title: "Real-Time Chat",
    description:
      "Instant messaging app with real-time updates and media sharing.",
    technologies: ["React", "Node.js", "Socket.io"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Real-Time",
    color: "from-purple-500 to-pink-500",
    icon: MessageSquare,
  },
  {
    id: 3,
    title: "Music Streaming",
    description:
      "Music platform with playlists, recommendations, and cloud storage.",
    technologies: ["React", "Node.js", "AWS"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Media",
    color: "from-green-500 to-emerald-500",
    icon: Music,
  },
  {
    id: 4,
    title: "AI Image Editor",
    description: "Advanced image processing with AI-powered features.",
    technologies: ["Python", "React", "OpenCV"],
    githubUrl: "#",
    liveUrl: "#",
    category: "AI/ML",
    color: "from-orange-500 to-red-500",
    icon: Camera,
  },
  {
    id: 5,
    title: "Learning Platform",
    description: "Online course platform with progress tracking.",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Education",
    color: "from-indigo-500 to-purple-500",
    icon: BookOpen,
  },
  {
    id: 6,
    title: "Finance Dashboard",
    description: "Personal finance tracker with analytics.",
    technologies: ["React", "Express.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Finance",
    color: "from-teal-500 to-cyan-500",
    icon: CreditCard,
  },
];
