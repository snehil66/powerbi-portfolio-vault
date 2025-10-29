import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Let's Connect
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    I'm always interested in discussing new opportunities, collaborations, or data-driven projects.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:snehilgupta97@gmail.com"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors">
                      <Mail size={20} className="text-accent" />
                    </div>
                    <span>snehilgupta97@gmail.com</span>
                  </a>

                  <a
                    href="tel:+917309626074"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <span>+91 7309626074</span>
                  </a>

                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin size={20} className="text-accent" />
                    </div>
                    <span>Gurugram, India</span>
                  </div>
                </div>
              </div>

              {/* Social Links & Education */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    Education
                  </h3>
                  <Card className="p-4 bg-muted/30 border-border">
                    <p className="font-semibold text-foreground">
                      Bachelor of Technology
                    </p>
                    <p className="text-muted-foreground">Information Technology</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Dr APJ Abdul Kalam Technical University
                    </p>
                    <p className="text-sm text-muted-foreground">2018 – 2022 • 75%</p>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    Connect With Me
                  </h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="lg" asChild>
                      <a
                        href="https://linkedin.com/in/snehi66/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={20} />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a
                        href="https://github.com/snehil66"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
