import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub",href: "https://github.com/AliNaseem123456789"},
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-ali-023303372"},
  // { icon: Twitter, label: "Twitter", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-zinc-400"
          >
            <span>© 2024 Muhammad Ali Naseem</span>
            {/* <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> */}
           
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-amber-500 border border-white/10 hover:border-amber-500 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-zinc-400 group-hover:text-black transition-colors" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
