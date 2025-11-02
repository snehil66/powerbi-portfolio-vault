import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-black" id="contact">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Get in Touch */}
              <div>
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <a
                        href="mailto:snehilgupta97@gmail.com"
                        className="text-white hover:text-cyan-400 transition-colors text-lg"
                      >
                        snehilgupta97@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Phone</p>
                      <a
                        href="tel:+917309626074"
                        className="text-white hover:text-cyan-400 transition-colors text-lg"
                      >
                        +91 7309626074
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Location</p>
                      <p className="text-white text-lg">Gurugram, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Social Media */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Social Media
                  </h3>
                  <div className="space-y-4 mb-8">
                    {/* GitHub */}
                    <a
                      href="https://www.linkedin.com/in/snehil66/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <Card className="bg-gray-800/50 border-gray-700/50 hover:border-cyan-500/50 transition-all p-4 hover:bg-gray-800/80">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Github className="w-6 h-6 text-cyan-400" />
                            <span className="text-white font-semibold">GitHub</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 group-hover:text-cyan-400 transition-colors">
                            <span className="text-sm">View Profile</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </Card>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/snehil66/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <Card className="bg-gray-800/50 border-gray-700/50 hover:border-cyan-500/50 transition-all p-4 hover:bg-gray-800/80">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Linkedin className="w-6 h-6 text-cyan-400" />
                            <span className="text-white font-semibold">LinkedIn</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 group-hover:text-cyan-400 transition-colors">
                            <span className="text-sm">Connect</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </Card>
                    </a>
                  </div>
                </div>

                {/* CTA Box */}
                <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-cyan-500/30 p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Open to new opportunities and collaborations. Let's build something amazing together!
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:opacity-90 text-white font-semibold py-6 text-base"
                    asChild
                  >
                    <a href="mailto:snehilgupta97@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send a Message
                    </a>
                  </Button>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
