import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

interface CertificationProps {
  title: string;
  organization: string;
  type: string;
}

const CertificationItem = ({ title, organization, type }: CertificationProps) => {
  return (
    <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center">
            <Award className="text-cyan-400" size={24} />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-2">{organization}</p>
          <Badge className="bg-gray-800/80 text-gray-300 border-gray-700">{type}</Badge>
        </div>
      </div>
    </Card>
  );
};

const Certifications = () => {
  const certifications: CertificationProps[] = [
    {
      title: "Power BI Essential Training",
      organization: "LinkedIn Learning",
      type: "Professional Development"
    },
    {
      title: "PwC Switzerland - Power BI Job Simulation",
      organization: "Forage",
      type: "Job Simulation"
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      organization: "Forage",
      type: "Job Simulation"
    },
    {
      title: "Accenture North America - Data Analytics and Visualization Job Simulation",
      organization: "Forage",
      type: "Job Simulation"
    }
  ];

  return (
    <section className="py-20 bg-black" id="certifications">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Certifications & Training
        </h2>
        <p className="text-cyan-400 text-center mb-12 text-lg">
          Continuous learning and professional development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CertificationItem {...cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
