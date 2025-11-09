import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* <p className="text-cyan-400 text-sm md:text-base mb-8 font-mono">$ portfolio.init()</p> */}
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Snehil Gupta
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-4 text-gray-300 font-semibold">
            Business Intelligence Developer{" "}
            {/* <span className="text-cyan-400">@ WM India</span> */}
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transforming data into{" "}
            <span className="text-cyan-400">actionable insights</span> with Power BI, SQL, Python and advanced analytics. 
            Specialized in{" "}
            <span className="text-purple-400">data modeling</span> and delivering{" "}
            <span className="text-blue-400">high-performance dashboards</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:opacity-90 text-white font-semibold"
              size="lg" 
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white" 
              asChild
            >
              <a href="#experience">
                View My Work
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/snehil66"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/snehi66/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:snehilgupta97@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
