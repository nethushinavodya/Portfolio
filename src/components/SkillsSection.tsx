import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "React Native", "Next.js", "JavaScript", "HTML/CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot", "Hibernate", "Payload CMS"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Git", "Postman", "Figma"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            02 — Skills
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Technologies I
            <br />
            <span className="text-muted-foreground">work with</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-mono text-xs text-muted-foreground mb-5 tracking-[0.2em] uppercase">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm border border-border text-foreground hover:bg-accent hover:border-muted-foreground/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
