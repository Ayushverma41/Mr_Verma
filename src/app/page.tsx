
import Image from "next/image";
import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Brain, Cpu, Terminal, ArrowRight, Heart, Smartphone } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const profileImage = PlaceHolderImages.find(img => img.id === "profile-pic");
  
  const skills = [
    { name: "Python", category: "Languages", icon: <Code2 className="w-4 h-4" /> },
    { name: "C++", category: "Languages", icon: <Code2 className="w-4 h-4" /> },
    { name: "C", category: "Languages", icon: <Code2 className="w-4 h-4" /> },
    { name: "SQL Programming", category: "Databases", icon: <Database className="w-4 h-4" /> },
    { name: "Relational Database", category: "Databases", icon: <Database className="w-4 h-4" /> },
    { name: "Database Design", category: "Databases", icon: <Database className="w-4 h-4" /> },
    { name: "Natural Language Processing", category: "AI/ML", icon: <Brain className="w-4 h-4" /> },
    { name: "Machine Learning Foundations", category: "AI/ML", icon: <Cpu className="w-4 h-4" /> },
    { name: "AI with ML in Java", category: "AI/ML", icon: <Brain className="w-4 h-4" /> },
    { name: "App Development: Flutter", category: "Mobile Dev", icon: <Smartphone className="w-4 h-4" /> },
  ];

  const projects = [
    {
      title: "CommandPal - NLP2CMD",
      description: "AI-powered assistant for command-line operations. It converts natural language into shell commands using advanced NLP models.",
      link: "https://github.com/Ayushverma41/CommandPal.git",
      image: PlaceHolderImages.find(img => img.id === "project-commandpal")?.imageUrl,
      tags: ["NLP", "Python", "CLI", "Machine Learning"]
    },
    {
      title: "Mental State Prediction",
      description: "A suite of NLP models trained to predict the mental state of a person based on text patterns from social media interactions.",
      link: "https://github.com/Ayushverma41/Mental-State-Prediction-using-NLP.git",
      image: PlaceHolderImages.find(img => img.id === "project-mental")?.imageUrl,
      tags: ["Sentiment Analysis", "NLP", "Social Media", "Python"]
    },
    {
      title: "ProductPulse",
      description: "A robust recommendation engine for e-commerce platforms, utilizing collaborative filtering and content-based approaches.",
      link: "https://product-pulse-self.vercel.app/",
      image: PlaceHolderImages.find(img => img.id === "project-pulse")?.imageUrl,
      tags: ["Recommendation Systems", "ML", "E-commerce", "Analytics"]
    },
    {
      title: "PURE E-Commerce",
      description: "A modern, high-performance frontend for e-commerce platforms with a focus on user experience and minimalist design.",
      link: "https://ayushverma41.github.io/Pure/",
      image: PlaceHolderImages.find(img => img.id === "project-pure")?.imageUrl,
      tags: ["Frontend", "UX/UI", "Web Design", "Responsive"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-black">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="about" className="pt-24 md:pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in-scroll text-center lg:text-left order-2 lg:order-1">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-accent uppercase">
                Software Engineer • NLP Specialist
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tight leading-tight">
                AYUSH KUMAR <span className="text-white/40">VERMA</span>
              </h1>
              <p className="text-base md:text-lg text-white/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Expertise in Natural Language Processing and machine learning model design. 
                I build intelligent, user-centric digital experiences by combining strong engineering principles with modern AI techniques.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Button variant="default" className="bg-white text-black hover:bg-accent w-full sm:w-auto" asChild>
                  <a href="#projects">View Projects <ArrowRight className="ml-2 w-4 h-4" /></a>
                </Button>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://github.com/Ayushverma41" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all bg-white/5"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/ayushverma41/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all bg-white/5"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:ayush21032016@gmail.com" 
                    className="p-2.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all bg-white/5"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linktr.ee/ayush21032016" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all bg-white/5"
                  >
                    <Terminal className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center fade-in-scroll [animation-delay:200ms] order-1 lg:order-2">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem]">
                <div className="absolute inset-0 bg-primary blur-[100px] opacity-20 animate-pulse"></div>
                <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden group">
                  <Image
                    src={profileImage?.imageUrl || "/images/Profile.png"}
                    alt="Ayush Kumar Verma"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint="professional man"
                    />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 space-y-2">
              <h2 className="text-3xl font-headline font-bold">Technical Skills</h2>
              <div className="h-1 w-20 bg-white"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {skills.map((skill, idx) => (
                <a 
                  key={skill.name} 
                  href="#"
                  className="p-4 sm:p-6 rounded-2xl border border-white/5 bg-black hover:border-primary/50 hover:bg-white/[0.03] transition-all group fade-in-scroll block"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="mb-3 sm:mb-4 text-white/40 group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="font-medium text-xs sm:text-sm text-white/90 leading-tight">{skill.name}</h3>
                  <span className="text-[9px] sm:text-[10px] text-white/30 uppercase tracking-widest mt-1 block">{skill.category}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 space-y-4 sm:space-y-0 flex flex-col sm:flex-row justify-between sm:items-end">
              <div>
                <h2 className="text-3xl font-headline font-bold">Featured Projects</h2>
                <div className="h-1 w-20 bg-white"></div>
              </div>
              <Button variant="default" className="bg-white text-black hover:bg-accent w-full sm:w-auto" asChild>
                <a href="https://github.com/Ayushverma41" target="_blank" rel="noopener noreferrer">
                  Explore all <Github className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <Card key={project.title} className="bg-black border-white/5 overflow-hidden group fade-in-scroll" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="aspect-video relative overflow-hidden">
                    <Image 
                      src={project.image || "https://picsum.photos/seed/project/600/400"} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint="machine learning"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project <ExternalLink className="ml-2 w-4 h-4" /></a>
                      </Button>
                    </div>
                  </div>
                  <CardHeader className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-white/5 text-white/60 hover:text-white font-normal text-[10px] uppercase">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl font-headline group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-white/[0.01]">
          <div className="max-w-4xl mx-auto text-center space-y-8 fade-in-scroll">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold">Let&apos;s build something <span className="text-primary italic">intelligent</span> together.</h2>
              <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">
                Currently open to software engineering opportunities with a focus on NLP, ML, and building user-centric AI solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 max-w-2xl mx-auto">
              <Button size="lg" className="bg-white text-black hover:bg-accent w-full" asChild>
                <a href="mailto:ayush21032016@gmail.com">
                  <Mail className="mr-2 w-5 h-5" /> Send an Email
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 w-full" asChild>
                <a href="https://linkedin.com/in/ayushverma41/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 w-5 h-5" /> LinkedIn Profile
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 w-full" asChild>
                <a href="https://github.com/Ayushverma41" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 w-5 h-5" /> GitHub Profile
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 w-full" asChild>
                <a href="https://linktr.ee/ayush21032016" target="_blank" rel="noopener noreferrer">
                  <Terminal className="mr-2 w-5 h-5" /> Linktree
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-sm font-medium">
            © {new Date().getFullYear()} Ayush Kumar Verma.
          </p>
          <div className="flex items-center gap-1 text-white/30 text-[10px] uppercase tracking-tighter">
            Build with <Heart className="w-3 h-3 text-primary fill-primary" /> and intelligence
          </div>
        </div>
      </footer>
    </div>
  );
}
