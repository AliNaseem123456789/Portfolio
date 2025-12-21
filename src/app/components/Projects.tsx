import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import realestate from "../../assets/RealEstate.jpg"
import restaurant from "../../assets/restuarant.jpg"
import Ecommerce from "../../assets/Ecommerce.jpg"
import socialmedia from "../../assets/socilamedia.jpg"
const projects = [
  {
    id: 1,
    title: "Social Media Website",
    description:
      "A full-stack social media platform featuring Google OAuth 2.0 authentication, friend management, posts, and real-time chat using WebSockets. Built with Supabase PostgreSQL and Elasticsearch for fast user search, deployed on Vercel and Render.",
    image:socialmedia,
    tags: [
      "React",
      "Node.js",
      "REST APIs",
      "Socket.io",
      "OAuth 2.0",
      "PostgreSQL",
    ],
    live: "https://social-media-project-one.vercel.app/",
    github: "https://github.com/AliNaseem123456789/Social-Media-website-Project",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Real Estate Website",
    description:
      "A MERN-based real estate platform with JWT authentication, advanced search and filtering, Redux state management, Firebase integration, and a scalable Express/Node backend.",
    image:realestate,
    tags: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JWT",
      "Redux",
      "Tailwind CSS",
      "Firebase",
    ],
    live: "https://realestatewebsite2.netlify.app/",
    github: "https://github.com/AliNaseem123456789/Real-Estate-Website",
    gradient: "from-emerald-500/20 to-green-500/20",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce platform featuring secure user authentication, product management, shopping cart, wishlist, and checkout flow. Built with a focus on performance, scalability, and a smooth user experience."
,
    image:Ecommerce ,
    tags: ["React", "Node.js", "REST APIs", "Stripe","Tailwindcss", "Supabase"],
    live: "https://my-ecommerce-website-three.vercel.app/",
    github: "https://github.com/AliNaseem123456789/My-Ecommerce-Website",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 4,
    title: "Restaurant Website",
    description:
      "A modern restaurant website with responsive UI, menu showcase, and smooth user experience. Links and advanced features will be added soon.",
    image:restaurant,
    tags: ["React", "Tailwind CSS", "UI/UX"],
    live: "https://my-restuarant-website.vercel.app/",
    github: "https://github.com/AliNaseem123456789/My-Restuarant-website",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-gradient-to-b from-zinc-950 to-black">
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
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 hover:border-white/20 transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
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

                <div className="flex gap-4">
  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]"
    >
      <ExternalLink className="w-4 h-4" />
      Live Demo
    </a>
  )}

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
    >
      <Github className="w-4 h-4" />
      Code
    </a>
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



