import { motion } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "AI Content Agent",
    subtitle: "GPT-4 + n8n Automation",
    description: "Automated content generation system that creates, schedules, and publishes content across multiple platforms.",
    tags: ["n8n", "GPT-4", "OpenAI", "Automation"],
    results: ["90% time saved", "5x content output", "Zero errors"],
    architecture: "User triggers workflow → n8n orchestrates → GPT-4 generates → Content scheduled → Published to platforms",
  },
  {
    id: 2,
    title: "Lead Generation Workflow",
    subtitle: "Apollo + Google Maps + Sheets",
    description: "Intelligent lead generation system that finds, qualifies, and enriches potential customers automatically.",
    tags: ["Apollo API", "Google Maps", "Google Sheets", "n8n"],
    results: ["10K+ leads/month", "85% accuracy", "24/7 operation"],
    architecture: "Apollo API → Data enrichment → Location verification → Google Sheets → CRM integration",
  },
  {
    id: 3,
    title: "Auto Reply System",
    subtitle: "Customer Support Automation",
    description: "AI-powered customer support that handles common queries and escalates complex issues to human agents.",
    tags: ["GPT-3.5", "Slack", "n8n", "Vector DB"],
    results: ["70% automation rate", "< 30s response time", "95% satisfaction"],
    architecture: "Customer message → Intent classification → Vector search → GPT response → Quality check → Auto-reply or escalate",
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 px-4 bg-deep-space/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Real-world automation solutions that deliver measurable results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl hover-glow cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-accent">{project.subtitle}</p>
              </div>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary/80 p-0 h-auto"
              >
                View Details <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="glass-card border-border/50 max-w-2xl">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-primary">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-accent text-lg">
                    {selectedProject.subtitle}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Overview</h4>
                    <p className="text-muted-foreground">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Architecture Flow</h4>
                    <div className="bg-secondary/30 p-4 rounded-lg border border-primary/20">
                      <p className="font-mono text-sm text-foreground leading-relaxed">
                        {selectedProject.architecture}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Key Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.results.map((result, i) => (
                        <div
                          key={i}
                          className="bg-primary/5 border border-primary/20 p-4 rounded-lg text-center"
                        >
                          <p className="text-primary font-bold">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
