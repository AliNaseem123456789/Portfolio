import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Bachelor of Engineering — Computer Information & Systems Engineering",
    company: "NED University of Engineering & Technology",
    duration: "Nov 2021 – Jun 2025",
    description:
      "Completed a Bachelor’s degree focused on computer information systems, software engineering, and problem-solving. Gained strong foundations in programming, databases, web technologies, and system design through academic coursework and projects.",
    skills: ["Data Structures", "Databases", "Web Development", "Software Engineering"],
  },
  {
    id: 2,
    title: "Freelancer",
    company: "Self-Employed",
    duration: "Apr 2022 – Present",
    description:
      "Worked as a freelance developer delivering solutions in web development, machine learning, and data analytics. Collaborated with clients to understand requirements, build efficient solutions, and deliver projects on time.",
    skills: ["React", "JavaScript", "Python", "Machine Learning", "Data Analytics"],
  },
  {
    id: 3,
    title: "Freelance Teacher",
    company: "Private Teaching",
    duration: "Feb 2023 – Dec 2023",
    description:
      "Provided online tutoring across multiple programming courses. Helped students learn JavaScript, Python, and core programming fundamentals, assisted with assignments, and developed custom learning materials to improve logical thinking.",
    skills: ["JavaScript", "Python", "Teaching", "Problem Solving"],
  },
  {
    id: 4,
    title: "Web Developer Intern",
    company: "NCBC, NED University",
    duration: "Mar 2024 – Jul 2024",
    description:
      "Developed a robust project management application using the MERN stack. Gained hands-on experience with full-stack development while learning about institutional infrastructure and operational workflows.",
    skills: ["MongoDB", "Express", "React", "Node.js", "MERN Stack"],
  },
 {
  id: 5,
  title: "AI & Web Application Developer",
  company: "3S Smart Solutions Star Inc.",
  duration: "Oct 2025 – Present",
  description:
    "Working remotely as an AI and Web Application Developer, contributing to the design, development, and deployment of intelligent systems and modern web applications. Collaborating with cross-functional teams to build scalable AI-driven features, integrate machine learning models into web platforms, and deliver reliable, production-ready solutions.",
  skills: [
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "React",
    "Next.js",
    "Web Development",
    "API Integration"
  ],
},];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-500/50 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-amber-500 border-4 border-black z-10 shadow-[0_0_20px_rgba(251,191,36,0.5)]" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-20 md:pl-0`}>
                  <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 hover:border-amber-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(251,191,36,0.1)]">
                    {/* Icon Badge */}
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
                      <Briefcase className="w-4 h-4 text-amber-400" />
                      <span className="text-sm font-medium text-amber-300">{exp.company}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 text-zinc-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>

                    <p className="text-zinc-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-xs font-medium bg-white/5 text-zinc-300 rounded-lg border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
