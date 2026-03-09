import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            01 — About
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">
            Passionate about
            <br />
            <span className="text-muted-foreground">building things</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a Software Engineering undergraduate with hands-on experience in designing, 
              developing, testing, and maintaining software applications.
            </p>
            <p>
              Proficient in Java, JavaScript, Spring Boot, React, and MySQL, with a strong 
              understanding of full-stack development.
            </p>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              A quick learner who enjoys solving complex problems, adapting to new technologies, 
              and building reliable software solutions.
            </p>
            <p>
              Currently studying at the Institute of Software Engineering (IJSE), developing 
              enterprise-level software using modern frameworks and tools.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Projects", value: "4+" },
            { label: "Technologies", value: "15+" },
            { label: "Languages", value: "2" },
            { label: "Year", value: "2024" },
          ].map((stat) => (
            <div key={stat.label} className="border-t border-border pt-4">
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
