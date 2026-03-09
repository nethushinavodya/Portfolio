import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 py-24 lg:py-0">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, hsl(0 0% 100%), transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-20 lg:pt-0">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-border px-4 py-1.5 mb-6 md:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-status-online animate-pulse" />
            <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6"
          >
            <span className="text-gradient">Nethushi</span>
            <br />
            <span className="text-foreground">Navodya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-mono text-sm tracking-wide text-muted-foreground mb-4"
          >
            Fullstack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-md text-base leading-relaxed mb-8 md:mb-10"
          >
            Crafting reliable, scalable software solutions with 
            Java, React, Spring Boot & modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap items-center gap-3 md:gap-4"
          >
            <a
              href="#projects"
              className="group px-6 md:px-7 py-3 bg-primary text-primary-foreground font-medium tracking-wide text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-6 md:px-7 py-3 border border-border text-foreground font-medium tracking-wide text-sm hover:bg-accent transition-colors"
            >
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 mt-8 md:mt-10"
          >
            <a href="mailto:nethushiperera03@gmail.com" className="p-2 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://github.com/nethushinavodya" target="_blank" rel="noreferrer" className="p-2 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/nethushi-perera-b04763231/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="p-2 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-border opacity-40" />
            <div className="absolute -inset-8 border border-border opacity-20" />
            
            <div className="relative w-[260px] h-[340px] sm:w-[320px] sm:h-[400px] lg:w-[380px] lg:h-[480px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src={profileImg}
                alt="Nethushi Navodya"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -right-4 lg:-right-6 bottom-8 lg:bottom-12 glass px-4 py-2"
            >
              <p className="font-mono text-xs text-muted-foreground">Based in</p>
              <p className="text-sm font-medium text-foreground">Sri Lanka 🇱🇰</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
