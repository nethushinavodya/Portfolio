import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "GameArenaX",
    subtitle: "Online eSports Gaming Platform",
    description: "Real-time competitive gaming platform for managing tournaments, live match interactions, and secure online payments.",
    tech: ["Spring Boot", "React.js", "WebSocket", "MySQL", "PayHere"],
  },
  {
    num: "02",
    title: "Study Zone",
    subtitle: "Student Q&A Mobile App",
    description: "Mobile learning platform where students can ask and answer academic questions, and access study materials.",
    tech: ["React Native", "Firebase Firestore", "Firebase Auth"],
  },
  {
    num: "03",
    title: "AdoptSmart",
    subtitle: "Pet Adoption Platform",
    description: "Full-stack MERN application connecting pet shelters with adopters to streamline the adoption process.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    num: "04",
    title: "HiddenVibes",
    subtitle: "Hidden Places Discovery",
    description: "Full-stack web app for discovering and sharing hidden travel destinations in Sri Lanka with admin approval.",
    tech: ["Next.js", "TypeScript", "Payload CMS", "MongoDB"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-20"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              03 — Projects
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Selected
              <br />
              <span className="text-muted-foreground">work</span>
            </h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs text-right">
            A collection of projects that showcase my skills in full-stack development.
          </p>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border-t border-border py-10 md:py-14 cursor-pointer hover:bg-accent/30 transition-colors -mx-6 px-6"
            >
              <div className="flex items-start gap-6">
                <span className="font-mono text-xs text-muted-foreground pt-2 hidden md:block">
                  {project.num}
                </span>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 mt-2" />
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-mono border border-border text-muted-foreground group-hover:border-muted-foreground/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
