import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "GameArenaX",
    subtitle: "Online eSports Gaming Platform",
    description: "Real-time competitive gaming platform for managing tournaments, live match interactions, and secure online payments.",
    tech: ["Spring Boot", "React.js", "WebSocket", "MySQL", "PayHere"],
    features: [
      "Real-time tournament updates & live match interactions using WebSocket",
      "Secure online payments via PayHere Payment Gateway",
    ],
  },
  {
    title: "Study Zone",
    subtitle: "Student Q&A Mobile App",
    description: "Mobile learning platform where students can ask and answer academic questions, and access study materials.",
    tech: ["React Native", "Firebase Firestore", "Firebase Auth"],
    features: [
      "Secure user authentication using Firebase",
      "Real-time cloud-based data storage with Firestore",
      "Upload and preview past papers and study materials",
    ],
  },
  {
    title: "AdoptSmart",
    subtitle: "Pet Adoption & Management Platform",
    description: "Full-stack MERN application connecting pet shelters with adopters to streamline the adoption process.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "User authentication and role-based access",
      "CRUD functionality for pets, adoption requests, and profiles",
    ],
  },
  {
    title: "HiddenVibes",
    subtitle: "Hidden Places Discovery Platform",
    description: "Full-stack web application for discovering and sharing hidden travel destinations in Sri Lanka.",
    tech: ["Next.js", "TypeScript", "Payload CMS", "MongoDB"],
    features: [
      "Role-based access with admin approval workflow",
      "Post submission and CRUD operations for places & comments",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            03 — Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
            Selected
            <br />
            <span className="text-muted-foreground">work</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border-t border-border py-12 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{project.subtitle}</p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-mono border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-2">
                {project.features.map((feature, fi) => (
                  <li key={fi} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
