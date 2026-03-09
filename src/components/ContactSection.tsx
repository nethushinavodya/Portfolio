import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            04 — Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            Let's build
            <br />
            <span className="text-muted-foreground">something great</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          <a
            href="mailto:nethushiperera03@gmail.com"
            className="group glass p-6 hover:border-muted-foreground/30 transition-all"
          >
            <Mail className="w-5 h-5 text-muted-foreground mb-4" />
            <p className="text-xs font-mono text-muted-foreground mb-1">Email</p>
            <p className="text-sm text-foreground group-hover:text-gradient transition-all flex items-center gap-1">
              nethushiperera03@gmail.com
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>

          <a
            href="tel:+94786080732"
            className="group glass p-6 hover:border-muted-foreground/30 transition-all"
          >
            <Phone className="w-5 h-5 text-muted-foreground mb-4" />
            <p className="text-xs font-mono text-muted-foreground mb-1">Phone</p>
            <p className="text-sm text-foreground group-hover:text-gradient transition-all flex items-center gap-1">
              +94 78 608 0732
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/nethushi-perera-b04763231/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass p-6 hover:border-muted-foreground/30 transition-all"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground mb-4" />
            <p className="text-xs font-mono text-muted-foreground mb-1">LinkedIn</p>
            <p className="text-sm text-foreground group-hover:text-gradient transition-all flex items-center gap-1">
              View profile
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>

          <div className="glass p-6">
            <MapPin className="w-5 h-5 text-muted-foreground mb-4" />
            <p className="text-xs font-mono text-muted-foreground mb-1">Location</p>
            <p className="text-sm text-foreground">Panadura, Sri Lanka</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
