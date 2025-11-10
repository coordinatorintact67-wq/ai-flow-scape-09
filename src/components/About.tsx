import { motion } from "framer-motion";
import { Workflow, Brain, Zap, Code } from "lucide-react";

const experiences = [
  {
    year: "2024",
    title: "Senior AI Automation Engineer",
    description: "Building enterprise-scale automation workflows",
    icon: Workflow,
  },
  {
    year: "2023",
    title: "AI Integration Specialist",
    description: "Integrating LLMs with business processes",
    icon: Brain,
  },
  {
    year: "2022",
    title: "Workflow Automation Developer",
    description: "Creating n8n workflows for diverse industries",
    icon: Zap,
  },
  {
    year: "2021",
    title: "Full-Stack Developer",
    description: "Building web applications and APIs",
    icon: Code,
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Passionate about bridging the gap between AI capabilities and real-world business needs
            through intelligent automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-xl hover-glow"
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">Expertise</h3>
            <p className="text-foreground leading-relaxed">
              Specializing in AI automation and workflow design, I create seamless integrations
              between AI models and business systems. My work focuses on making AI practical and
              accessible through tools like n8n, enabling organizations to automate complex
              processes with intelligent decision-making.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-xl hover-glow"
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">Approach</h3>
            <p className="text-foreground leading-relaxed">
              I believe in building automation that's both powerful and maintainable. Every workflow
              I design prioritizes clarity, scalability, and real business impact. From API
              integrations to custom LLM implementations, I focus on solutions that work reliably
              in production.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center">Journey</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl hover-glow flex items-start gap-4"
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <exp.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-mono text-accent">{exp.year}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
