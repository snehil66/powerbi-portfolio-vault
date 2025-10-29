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
    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
            <Award className="text-accent-foreground" size={24} />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground mb-2">{organization}</p>
          <Badge variant="outline">{type}</Badge>
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
    <section className="py-20 bg-muted/30" id="certifications">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Certifications & Training
        </h2>
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
