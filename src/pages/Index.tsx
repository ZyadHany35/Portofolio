import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Download, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = {
  Backend: ["C#", "ASP.NET Core", "Web APIs", "EF Core", "LINQ", "SOLID", "Design Patterns"],
  Databases: ["SQL Server", "Caching Strategies"],
  AI: ["Generative AI Concepts", "Python"],
  DevOps: ["Git", "GitHub"],
  Languages: ["C++", "C#", "Python", "Java", "JavaScript", "Arabic", "English"],
};

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur border-b border-border shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("#hero")} className="text-lg font-bold tracking-tight text-foreground">
            ZHS
          </button>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <header id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Building Scalable Software with AI
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Software Engineer specializing in .NET development and Generative AI, turning complex problems into clean, practical solutions.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" onClick={() => scrollTo("#contact")}>
              Get in Touch
            </Button>
            <a href="https://github.com/ZyadHany35" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/ziadhany35" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </div>
          <button
            onClick={() => scrollTo("#about")}
            className="mt-16 inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">About</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a senior Computer Science student at Cairo University with a sharp focus on backend engineering. My core toolkit revolves around the .NET ecosystem—building robust APIs, designing efficient data layers, and applying clean architecture principles that keep codebases maintainable as they scale.
            </p>
            <p>
              Beyond traditional backend work, I'm deeply interested in Generative AI and how it can augment real-world applications. I enjoy bridging the gap between solid software engineering practices and emerging AI capabilities to deliver practical, high-impact solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-muted/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-10">Skills</h2>
          <div className="space-y-6">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm font-medium px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-10">Experience</h2>
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <CardTitle className="text-xl">.NET Developer Intern</CardTitle>
                <span className="text-sm text-muted-foreground">Mar 2025 – Sep 2025</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">Middleware</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Built and maintained scalable .NET Web APIs serving high-traffic endpoints. Optimized LINQ queries and Entity Framework Core data access for measurable performance gains. Applied dependency injection and custom middleware patterns to enforce clean separation of concerns. Implemented caching strategies that significantly reduced database load and improved response times across critical services.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-muted/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-10">Projects</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Gomoku Game</CardTitle>
              <p className="text-sm text-muted-foreground">C# · .NET</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A full-featured implementation of the classic Gomoku board game with multiple play modes, an AI opponent powered by strategic evaluation, and automated win detection—demonstrating strong OOP design and algorithmic thinking.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>Player vs Player and Player vs AI gameplay modes</li>
                <li>AI opponent with heuristic-based move evaluation</li>
                <li>Real-time win detection across rows, columns, and diagonals</li>
                <li>Comprehensive unit tests for game logic</li>
                <li>Detailed README with setup and usage instructions</li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="https://github.com/ZyadHany35" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View on GitHub
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-10">
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-4 w-4" /> +01023352903
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-4 w-4" /> zyadhanysaad@gmail.com
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> Giza, Egypt
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="mailto:zyadhanysaad@gmail.com">
              <Button size="lg">Get in Touch</Button>
            </a>
            <a href="/Ziad_Hany_CV.pdf" download>
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© Ziad Hany Saad. All rights reserved.</span>
          <a
            href="https://github.com/ZyadHany35"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
