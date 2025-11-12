import { motion } from "framer-motion";
import { Zap, Brain, GitBranch, Code2, Database, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Development",
    icon: Code2,
    skills: ["Python"],
  },
  {
    title: "Artificial Intelligence",
    icon: Brain,
    skills: ["OpenAI agent SDK", "MCP (Model Context Protocol)"],
  },
  {
    title: "Automation",
    icon: Zap,
    skills: ["n8n", "AgentKit"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            A comprehensive toolkit for building intelligent automation systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-xl hover-glow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-accent"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                    <span className={["Development", "Artificial Intelligence", "Automation"].includes(category.title) ? "text-xl text-primary font-semibold" : "text-sm text-muted-foreground hover:text-foreground transition-colors"}>
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Animated progress bar */}
              <motion.div
                className="mt-4 h-1 bg-secondary rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Core Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass-card p-8 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Core Specialization</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Python", "OpenAI agent SDK", "MCP", "n8n", "Agentkit"].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
