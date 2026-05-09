import { motion } from "motion/react";
import { ExternalLink, Github, Bot, ChevronDown, Server } from "lucide-react";
import { useState } from "react";
import realestate from "../../assets/RealEstate.jpg";
import restaurant from "../../assets/restuarant.jpg";
import Ecommerce from "../../assets/Ecommerce.jpg";
import socialmedia from "../../assets/socilamedia.jpg";
import wholesale_smoke from "../../assets/smoke-wholesale.PNG";

// Type definitions
interface ProjectLinks {
  frontend?: string;
  backend?: string;
  github?: string;
  chatbot?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: ProjectLinks;
  hasMultipleLinks: boolean;
  gradient: string;
}

interface DropdownButtonProps {
  links: ProjectLinks;
}

interface SimpleButtonProps {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Social Media Website",
    description: "Full-stack social platform with OAuth 2.0, real-time WebSocket messaging, WebRTC video/audio calls with screen sharing, and GraphQL API (33% latency reduction). Built custom multi-agent AI architecture (Post Agent, Friend Suggestion Agent, Engagement Agent) with RAG using Groq LLM (sub-400ms) and Qdrant vector DB for persistent user memory. Features Elasticsearch-powered user discovery (<200ms), friend suggestions, birthday reminders, and proactive recommendations.",
    image: socialmedia,
    tags: ["React", "Node.js", "GraphQL", "WebSockets", "WebRTC", "RAG", "Elasticsearch", "Groq LLM", "Qdrant"],
    links: {
      frontend: "https://social-media-project-one.vercel.app/",
      backend: "https://github.com/AliNaseem123456789/Social-Media-website-Project/tree/main/backend",
      github: "https://github.com/AliNaseem123456789/Social-Media-website-Project",
      chatbot: "https://social-media-project-one.vercel.app/chatbot" 
    },
    hasMultipleLinks: false,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Real Estate Website",
    description: "MERN-based real estate platform with JWT authentication, advanced search/filtering, Redux state management, and Firebase integration. Features AI chatbot with multi-bot gateway (FastAPI) using Groq LLM and RAG for intelligent property guidance and recommendations.",
    image: realestate,
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "Redux", "Tailwind CSS", "Firebase", "FastAPI", "RAG", "Groq LLM"],
    links: {
      frontend: "https://realestatewebsite2.netlify.app/",
      github: "https://github.com/AliNaseem123456789/Real-Estate-Website",
      chatbot: "https://github.com/AliNaseem123456789/Chatbot-gateway"
    },
    hasMultipleLinks: true,
    gradient: "from-emerald-500/20 to-green-500/20",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "Full-stack e-commerce solution with NestJS backend, Supabase, and secure Stripe payments. Features AI chatbot with production RAG pipeline using 8 query rewriting techniques (HyDE, decomposition, constraint extraction) and hybrid search (BM25 + vector embeddings). Two-tier intent classifier routes simple queries away from LLM, reducing API costs and latency. Supports multimodal inputs: text, images, voice commands, and PDF analysis with constrained LLM responses to reduce hallucination.",
    image: Ecommerce,
    tags: ["React", "NestJS", "Stripe", "Supabase", "RAG", "BM25", "Vector Embeddings", "Multimodal AI"],
    links: {
      frontend: "https://my-ecommerce-website-three.vercel.app/",
      github: "https://github.com/AliNaseem123456789/My-Ecommerce-Website",
      backend: "https://github.com/AliNaseem123456789/Ecommerce-Website-Backend-",
      chatbot: "https://github.com/AliNaseem123456789/Chatbot-gateway"
    },
    hasMultipleLinks: true,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 4,
    title: "Wholesale Website",
    description: "Sophisticated wholesale platform with hierarchical RBAC for accounts and sub-accounts. Features secure JWT authentication with HttpOnly cookies, complex Redux state management for multiple saved carts, and persistent user sessions. RAG implementation enables chatbot to query live database (products, brands, orders) with modular TypeScript API services and custom hooks.",
    image: wholesale_smoke, 
    tags: ["React", "Node.js", "JWT", "Redux", "Prisma", "TypeScript", "RAG", "RBAC"],
    links: {
      frontend: "https://i-done-this.vercel.app/",
      github: "https://github.com/AliNaseem123456789/Smoke-wholesale",
      backend: "https://github.com/AliNaseem123456789/Smoke-wholesale-backend",
      chatbot: "https://github.com/AliNaseem123456789/Chatbot-gateway",
    },
    hasMultipleLinks: true,
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    id: 5,
    title: "Productivity Website",
    description: "Full-stack 'I Done This' style productivity platform with daily task journaling (Done/Doing/Delayed), interactive monthly calendar with task indicators, and AI-powered reports using Groq LLM (llama-3.1-8b-instant) for weekly summaries and actionable recommendations. Features scheduled email/SMS reminders, searchable history with filters and CSV/JSON export, and real-time analytics charts (Recharts) for completion rates and productivity streaks.",
    image: Ecommerce,
    tags: ["React", "Node.js", "JWT", "Groq LLM", "Recharts", "REST APIs", "AI"],
    links: {
      frontend: "https://i-done-this.vercel.app/",
      github: "https://github.com/AliNaseem123456789/IDoneThis"
    },
    hasMultipleLinks: false,
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    id: 6,
    title: "Restaurant Website",
    description: "A modern restaurant website with responsive UI, menu showcase, and smooth user experience.",
    image: restaurant,
    tags: ["React", "Tailwind CSS", "UI/UX"],
    links: {
      frontend: "https://my-restuarant-website.vercel.app/",
      github: "https://github.com/AliNaseem123456789/My-Restuarant-website"
    },
    hasMultipleLinks: false,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
];

// Dropdown Button Component - FIXED: Removed Frontend from dropdown
function DropdownButton({ links }: DropdownButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Removed "frontend" from options since it's already the main Live Demo button
  const buttonOptions = [
    { key: "backend" as const, label: "Backend API", icon: Server },
    { key: "chatbot" as const, label: "AI Chatbot Code", icon: Bot },
    { key: "github" as const, label: "GitHub Code", icon: Github },
  ];

  const availableOptions = buttonOptions.filter(opt => links[opt.key]);

  const handleSelect = (option: typeof buttonOptions[0]) => {
    if (links[option.key]) {
      window.open(links[option.key], "_blank");
    }
    setIsOpen(false);
  };

  if (availableOptions.length === 0) return null;

  return (
    <div className="relative flex-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
      >
        <span>More Options</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute bottom-full mb-2 left-0 right-0 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-xl z-20 animate-in fade-in slide-in-from-bottom-2 duration-200">
            {availableOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.key}
                  onClick={() => handleSelect(option)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left text-zinc-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

// Simple Button Component
function SimpleButton({ href, label, icon: Icon }: SimpleButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
    >
      <Icon className="w-4 h-4" />
      {label}
    </a>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 bg-gradient-to-b from-zinc-950 to-black"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-medium bg-white/5 text-zinc-300 rounded-lg border border-white/10 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links Buttons */}
                  <div className="flex gap-4">
                    {project.hasMultipleLinks ? (
                      <>
                        {/* Main Live Demo button for primary link */}
                        {project.links.frontend && (
                          <a
                            href={project.links.frontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                        {/* Dropdown for other links (backend, chatbot, github) */}
                        <DropdownButton links={project.links} />
                      </>
                    ) : (
                      <>
                        {project.links.frontend && (
                          <SimpleButton 
                            href={project.links.frontend} 
                            label="Live Demo" 
                            icon={ExternalLink} 
                          />
                        )}
                        {project.links.github && (
                          <SimpleButton 
                            href={project.links.github} 
                            label="Code" 
                            icon={Github} 
                          />
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}