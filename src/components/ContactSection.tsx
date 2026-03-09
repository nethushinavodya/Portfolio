import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            04 — Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Let's work
            <br />
            <span className="text-muted-foreground">together</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mb-16 leading-relaxed">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <a
            href="mailto:nethushiperera03@gmail.com"
            className="group flex items-center gap-4 text-foreground hover:text-muted-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-lg md:text-xl font-light">nethushiperera03@gmail.com</span>
          </a>

          <a
            href="tel:+94786080732"
            className="group flex items-center gap-4 text-foreground hover:text-muted-foreground transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg md:text-xl font-light">078 608 0732</span>
          </a>

          <div className="flex items-center gap-4 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span className="text-lg md:text-xl font-light">Panadura, Sri Lanka</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
