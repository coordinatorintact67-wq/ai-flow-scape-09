import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm">
            © 2024 AI Engineer Portfolio. Built with React, TypeScript & Framer Motion.
          </p>
          <p className="text-xs mt-2">
            Automating Intelligence, One Workflow at a Time
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
