import { motion } from "motion/react";
import {
  Code2,
  Database,
  Server,
  Palette,
  Zap,
  Globe,
} from "lucide-react";

const skills = [
  // Frontend
  { icon: Code2, name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  { icon: Code2, name: "React.js", color: "from-cyan-500 to-blue-500" },
  { icon: Code2, name: "Next.js", color: "from-zinc-500 to-zinc-700" },
  { icon: Palette, name: "Tailwind CSS", color: "from-cyan-400 to-blue-500" },
  { icon: Palette, name: "Redux", color: "from-purple-500 to-purple-700" },
  { icon: Globe, name: "Three.js", color: "from-indigo-500 to-indigo-700" },

  // Backend
  { icon: Server, name: "Node.js", color: "from-green-500 to-emerald-600" },
  { icon: Server, name: "Express.js", color: "from-gray-500 to-gray-700" },
  { icon: Server, name: "ASP.NET", color: "from-blue-600 to-indigo-700" },
  { icon: Zap, name: "REST APIs", color: "from-pink-500 to-rose-600" },

  // Databases & Cloud
  { icon: Database, name: "MongoDB", color: "from-green-600 to-green-700" },
  { icon: Database, name: "Firebase", color: "from-amber-500 to-orange-600" },
  { icon: Database, name: "Supabase", color: "from-emerald-500 to-teal-600" },

  // DevOps / Tools
  { icon: Zap, name: "Git & GitHub", color: "from-zinc-600 to-zinc-800" },
  { icon: Zap, name: "Docker", color: "from-sky-500 to-blue-600" },
  { icon: Zap, name: "Vercel / Netlify", color: "from-black to-zinc-700" },
];


export function About() {
  return (
    <section id="about" className="relative py-32 px-6 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
           <p className="text-lg text-zinc-300 leading-relaxed mb-6">
  I’m a Computer Information & Systems Engineering graduate based in Karachi, Pakistan,
  with strong hands-on experience in full-stack web development. I primarily work with
  the MERN stack, Next.js, and ASP.NET, building modern, scalable, and user-focused web
  applications.
</p>

<p className="text-lg text-zinc-300 leading-relaxed mb-6">
  Over the past few years, I’ve worked as a freelancer and web developer intern, delivering
  real-world solutions such as management systems, e-commerce platforms, and interactive
  web applications. I enjoy translating ideas into clean, maintainable code while focusing
  on performance, usability, and reliability.
</p>

<p className="text-lg text-zinc-300 leading-relaxed">
  Alongside web development, I have experience working with machine learning, data
  analytics, and intelligent systems, which allows me to build smarter and more dynamic
  applications. I’m always eager to learn new technologies, take on challenging projects,
  and grow as a developer in collaborative team environments.
</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 rounded-2xl border border-amber-500/20 text-center">
                <div className="text-4xl font-bold text-amber-400 mb-1">2+</div>
                <div className="text-sm text-zinc-400">Years Exp</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl border border-blue-500/20 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-1">10+</div>
                <div className="text-sm text-zinc-400">Projects</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border border-green-500/20 text-center">
                <div className="text-4xl font-bold text-green-400 mb-1">5+</div>
                <div className="text-sm text-zinc-400">Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Technical Skills</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                    
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} p-2.5 mb-4`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <h4 className="font-semibold text-white">{skill.name}</h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
