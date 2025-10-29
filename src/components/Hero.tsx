import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Data visualization background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Snehil Gupta
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-primary-foreground/90 font-semibold">
            Business Intelligence Developer
          </p>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Transforming data into actionable insights with Power BI, Tableau, and advanced analytics
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2" />
                Get in Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-white/20" asChild>
              <a href="#experience">
                View Experience
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a
              href="mailto:snehilgupta97@gmail.com"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/snehi66/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/snehil66"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="tel:+917309626074"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
